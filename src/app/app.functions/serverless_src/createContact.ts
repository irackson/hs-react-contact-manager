import axios from 'axios';
import { z } from 'zod';
import gql from 'graphql-tag';
import { main as fetchContactsMain } from './fetchContacts';

async function waitForContactInSearchIndex(
  contactId: string,
  token: string,
  maxAttempts = 15
): Promise<void> {
  console.info(`Waiting for contact ${contactId} to appear in search index...`);
  let attempts = 0;

  while (attempts < maxAttempts) {
    attempts += 1;

    console.info(
      `Calling fetchContactsMain for contact ${contactId} (attempt ${attempts})...`
    );
    const response = await fetchContactsMain({
      parameters: {
        pageInfo: {
          offset: 0,
          limit: 5,
        },
        orderBy: [
          {
            propertyName: 'email',
            ascending: true,
          },
          {
            propertyName: 'hs_createdate',
            ascending: true,
          },
        ],
      },
    });

    const targetContact = response.contacts.find(
      ({ _metadata }) => _metadata.id === contactId
    );

    if (targetContact) {
      console.log(
        `Found contact ${contactId} in search index! Last modified at ${targetContact.lastmodifieddate}`
      );
      return;
    }

    await new Promise((r) => setTimeout(r, 500));
  }

  throw new Error(
    `Timed out waiting for contact ${contactId} to appear in search index.`
  );
}

export const main = async ({
  parameters: { waitForSearchIndexUpdate = false },
}: {
  parameters: {
    waitForSearchIndexUpdate?: boolean;
  };
}) => {
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN_SECRET'];
  if (!token) {
    throw Error('Missing PRIVATE_APP_ACCESS_TOKEN_SECRET');
  }

  const response = await axios.post(
    'https://api.hubapi.com/crm/v3/objects/contacts',
    { properties: {} },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const parsedResponse = z
    .object({
      id: z.string(),
      properties: z.record(z.unknown()),
      createdAt: z.string(),
      updatedAt: z.string(),
      archived: z.boolean(),
    })
    .safeParse(response.data);

  if (!parsedResponse.success) {
    console.error('Unexpected createContact response:', response.data);
    console.error('Zod error:', parsedResponse.error);
    throw Error('Failed to create contact (invalid response)');
  }

  const createdContactId = parsedResponse.data.id;

  if (waitForSearchIndexUpdate) {
    try {
      await waitForContactInSearchIndex(createdContactId, token);
    } catch (err) {
      console.error(
        `Contact ${createdContactId} did not show up in search within the time limit.`
      );
    }
  }

  return { id: createdContactId };
};

export type CreateContactsParameters = Parameters<typeof main>[0]['parameters'];
export type CreateContactResponse = Awaited<ReturnType<typeof main>>;
