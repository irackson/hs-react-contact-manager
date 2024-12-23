import axios from 'axios';
import { z } from 'zod';
import gql from 'graphql-tag';

export const createQueryAndSuccessSchema = <
  T extends { [key: string]: z.ZodTypeAny }
>(
  desiredPropertiesSchema: T,
  filterString: string
) => {
  const fields = Object.keys(desiredPropertiesSchema).join('\n            ');

  const query = gql`
    query GetContacts($limit: Int, $offset: Int, $orderBy: [crm_contact_order_by!]) {
      CRM {
        contact_collection(limit: $limit, offset: $offset, orderBy: $orderBy, filter: ${filterString}) {
          items {
            ${fields}
            _metadata {
              id
            }
          }
          hasMore
          offset
          total
        }
      }
    }
  `.loc?.source?.body;
  if (!query) throw Error('Failed to generate GraphQL query string');

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
          total: z.number(),
        }),
      }),
    }),
    extensions: z.unknown().optional(),
    /* extensions: z
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
      .optional(), */
  });

  return { query, SuccessSchema };
};

export const main = async ({
  parameters: {
    pageInfo: { offset: incomingOffset, limit },
    orderBy,
    statusFilterOptions = {
      includeActive: true,
      includeInactive: true,
      includeEmpty: true,
    },
  },
}: {
  parameters: {
    pageInfo: {
      offset: number;
      limit: number;
    };
    orderBy: Array<{ propertyName: string; ascending: boolean }>;
    statusFilterOptions?: {
      includeActive: boolean;
      includeInactive: boolean;
      includeEmpty: boolean;
    };
  };
}) => {
  const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
  if (typeof token !== 'string' || token.trim().length === 0)
    throw Error('Missing PRIVATE_APP_ACCESS_TOKEN');

  const filterString = (() => {
    if (
      statusFilterOptions.includeActive &&
      statusFilterOptions.includeInactive &&
      statusFilterOptions.includeEmpty
    )
      return '{}';

    if (
      !statusFilterOptions.includeActive &&
      !statusFilterOptions.includeInactive &&
      statusFilterOptions.includeEmpty
    )
      return `{ hs_content_membership_status__null: true }`;

    if (
      statusFilterOptions.includeActive &&
      !statusFilterOptions.includeInactive &&
      statusFilterOptions.includeEmpty
    ) {
      return `{ hs_content_membership_status__neq: "inactive" }`;
    }

    if (
      !statusFilterOptions.includeActive &&
      statusFilterOptions.includeInactive &&
      statusFilterOptions.includeEmpty
    ) {
      return `{ hs_content_membership_status__neq: "active" }`;
    }

    const statusFilterInArray: string[] = [];
    if (statusFilterOptions.includeActive) statusFilterInArray.push('active');
    if (statusFilterOptions.includeInactive)
      statusFilterInArray.push('inactive');

    return ` { hs_content_membership_status__in: ${JSON.stringify(
      statusFilterInArray
    )} }`;
  })();

  const { query, SuccessSchema } = createQueryAndSuccessSchema(
    {
      email: z.string().nullable().optional(),
      firstname: z.string().nullable().optional(),
      lastname: z.string().nullable().optional(),
      lastmodifieddate: z.number().nullable().optional(),
      hs_content_membership_status: z
        .object({
          label: z.string(),
          value: z.string(),
        })
        .nullable()
        .optional(),
    },
    filterString
  );

  console.info(`Searching for contacts with filter: ${filterString}`);
  const response = await axios
    .post(
      'https://api.hubapi.com/collector/graphql',
      {
        query,
        variables: {
          limit,
          offset: incomingOffset,
          orderBy: orderBy.map(
            ({ propertyName, ascending }) =>
              `${propertyName}__${ascending ? 'asc' : 'desc'}`
          ),
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .catch((err) => {
      console.error('Error:', err);
      throw Error(`Failed to fetch contacts: ${err.message}`);
    });

  const parsedResponse = SuccessSchema.safeParse(response.data);
  if (!parsedResponse.success) {
    console.error(`Unexpected response: ${JSON.stringify(response.data)}`);
    console.log('Zod Error:', parsedResponse.error);
    throw Error('Failed to fetch contacts');
  }

  const { items, hasMore, offset, total } =
    parsedResponse.data.data.CRM.contact_collection;

  console.table(items);

  return {
    contacts: items,
    hasMore,
    offset,
    total,
  };
};

export type FetchContactsParameters = Parameters<typeof main>[0]['parameters'];
export type FetchContactsResponse = Awaited<ReturnType<typeof main>>;
