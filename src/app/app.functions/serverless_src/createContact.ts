import axios from 'axios';
import { z } from 'zod';

const CreateContactSuccessSchema = z.object({
  id: z.string(),
  properties: z.record(z.unknown()),
  createdAt: z.string(),
  updatedAt: z.string(),
  archived: z.boolean(),
});

export const main = async () => {
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
  if (!token) {
    throw new Error('Missing PRIVATE_APP_ACCESS_TOKEN');
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

  const parsedResponse = CreateContactSuccessSchema.safeParse(response.data);
  if (!parsedResponse.success) {
    console.error('Unexpected createContact response:', response.data);
    console.error('Zod error:', parsedResponse.error);
    throw new Error('Failed to create contact (invalid response)');
  }

  return { id: parsedResponse.data.id };
};

export type CreateContactResponse = Awaited<ReturnType<typeof main>>;
