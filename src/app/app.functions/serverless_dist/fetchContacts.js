"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.createQueryAndSuccessSchema = void 0;
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const createQueryAndSuccessSchema = (desiredPropertiesSchema, filterString) => {
    const fields = Object.keys(desiredPropertiesSchema).join('\n            ');
    const query = (0, graphql_tag_1.default) `
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
    if (!query)
        throw Error('Failed to generate GraphQL query string');
    const SuccessSchema = zod_1.z.object({
        data: zod_1.z.object({
            CRM: zod_1.z.object({
                contact_collection: zod_1.z.object({
                    items: zod_1.z.array(zod_1.z
                        .object({
                        _metadata: zod_1.z.object({
                            id: zod_1.z.string(),
                        }),
                    })
                        .extend(desiredPropertiesSchema)),
                    hasMore: zod_1.z.boolean(),
                    offset: zod_1.z.number(),
                    total: zod_1.z.number(),
                }),
            }),
        }),
        extensions: zod_1.z.unknown().optional(),
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
exports.createQueryAndSuccessSchema = createQueryAndSuccessSchema;
const main = async ({ parameters: { pageInfo: { offset: incomingOffset, limit }, orderBy, statusFilterOptions = {
    includeActive: true,
    includeInactive: true,
    includeEmpty: true,
}, }, }) => {
    const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
    if (typeof token !== 'string' || token.trim().length === 0)
        throw Error('Missing PRIVATE_APP_ACCESS_TOKEN');
    const filterString = (() => {
        if (statusFilterOptions.includeActive &&
            statusFilterOptions.includeInactive &&
            statusFilterOptions.includeEmpty)
            return '{}';
        if (!statusFilterOptions.includeActive &&
            !statusFilterOptions.includeInactive &&
            statusFilterOptions.includeEmpty)
            return `{ hs_content_membership_status__null: true }`;
        if (statusFilterOptions.includeActive &&
            !statusFilterOptions.includeInactive &&
            statusFilterOptions.includeEmpty) {
            return `{ hs_content_membership_status__neq: "inactive" }`;
        }
        if (!statusFilterOptions.includeActive &&
            statusFilterOptions.includeInactive &&
            statusFilterOptions.includeEmpty) {
            return `{ hs_content_membership_status__neq: "active" }`;
        }
        const statusFilterInArray = [];
        if (statusFilterOptions.includeActive)
            statusFilterInArray.push('active');
        if (statusFilterOptions.includeInactive)
            statusFilterInArray.push('inactive');
        return ` { hs_content_membership_status__in: ${JSON.stringify(statusFilterInArray)} }`;
    })();
    const { query, SuccessSchema } = (0, exports.createQueryAndSuccessSchema)({
        email: zod_1.z.string().nullable().optional(),
        firstname: zod_1.z.string().nullable().optional(),
        lastname: zod_1.z.string().nullable().optional(),
        lastmodifieddate: zod_1.z.number().nullable().optional(),
        hs_content_membership_status: zod_1.z
            .object({
            label: zod_1.z.string(),
            value: zod_1.z.string(),
        })
            .nullable()
            .optional(),
    }, filterString);
    console.info(`Searching for contacts with filter: ${filterString}`);
    const response = await axios_1.default
        .post('https://api.hubapi.com/collector/graphql', {
        query,
        variables: {
            limit,
            offset: incomingOffset,
            orderBy: orderBy.map(({ propertyName, ascending }) => `${propertyName}__${ascending ? 'asc' : 'desc'}`),
        },
    }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
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
    const { items, hasMore, offset, total } = parsedResponse.data.data.CRM.contact_collection;
    console.table(items);
    return {
        contacts: items,
        hasMore,
        offset,
        total,
    };
};
exports.main = main;
