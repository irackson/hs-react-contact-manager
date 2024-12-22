import axios from 'axios';
import { z } from 'zod';
import gql from 'graphql-tag';

export const createQueryAndSuccessSchema = <
  T extends { [key: string]: z.ZodTypeAny }
>(
  desiredPropertiesSchema: T
) => {
  const fields = Object.keys(desiredPropertiesSchema).join('\n            ');

  const query = gql`
    query GetContacts($limit: Int, $offset: Int, $orderBy: [crm_contact_order_by!]) {
      CRM {
        contact_collection(limit: $limit, offset: $offset, orderBy: $orderBy) {
          items {
            ${fields}
            _metadata {
              id
            }
          }
          hasMore
          offset
        }
      }
    }
  `.loc?.source?.body;
  if (!query) throw new Error('Failed to generate graphql query string');

  const SuccessSchema = z.object({
    data: z.object({
      CRM: z.object({
        contact_collection: z.object({
          items: z.array(
            z
              .object({
                _metadata: z.object({
                  id: z.string(),
                }),
              })
              .extend(desiredPropertiesSchema)
          ),
          hasMore: z.boolean(),
          offset: z.number(),
        }),
      }),
    }),
    extensions: z
      .object({
        query_complexity: z.object({
          max_points: z.number(),
          used_points: z.number(),
          points_for_internal_api_requests: z.object({
            count: z.number(),
            weight: z.number(),
            used_points: z.number(),
          }),
          points_for_objects_retrieved: z.object({
            count: z.number(),
            weight: z.number(),
            used_points: z.number(),
          }),
          points_for_properties_with_value: z.object({
            count: z.number(),
            weight: z.number(),
            used_points: z.number(),
          }),
          points_for_properties_without_value: z.object({
            count: z.number(),
            weight: z.number(),
            used_points: z.number(),
          }),
        }),
        rate_limit_info: z.array(
          z.object({
            interval: z.number(),
            interval_unit: z.string(),
            max_points: z.number(),
            remaining_points: z.number(),
          })
        ),
      })
      .optional(),
  });

  return { query, SuccessSchema };
};

export const main = async (context: {
  parameters?: {
    limit?: number;
    after?: number;
    orderBy?: string[];
  };
}) => {
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
  if (typeof token !== 'string' || token.trim().length === 0)
    throw Error('Missing PRIVATE_APP_ACCESS_TOKEN');

  const {
    limit = 5,
    after = 0,
    orderBy = ['createdate__asc'],
  } = context.parameters || {};

  const { query, SuccessSchema } = createQueryAndSuccessSchema({
    email: z.string().email().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    lastmodifieddate: z.number().optional(),
    hs_content_membership_status: z
      .object({
        label: z.string().optional(),
        value: z.string().optional(),
      })
      .nullable()
      .optional(),
  });

  const response = await axios
    .post(
      'https://api.hubapi.com/collector/graphql',
      { query, variables: { limit, offset: after, orderBy } },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .catch((err) => {
      console.error('Error:', err);
      throw new Error(`Failed to fetch contacts: ${err.message}`);
    });

  console.log(
    `Received graphql response status: ${response.status} [${response.statusText}]`
  );

  const parsedResponse = SuccessSchema.safeParse(response.data);
  if (!parsedResponse.success) {
    console.error(`Unexpected response: ${JSON.stringify(response.data)}`);
    console.log('Zod Error:', parsedResponse.error);
    throw new Error('Failed to fetch contacts');
  }

  const {
    items: contacts,
    hasMore,
    offset,
  } = parsedResponse.data.data.CRM.contact_collection;

  return {
    contacts,
    hasMore,
    offset,
  };
};
export type FetchContactsResponse = Awaited<ReturnType<typeof main>>;
