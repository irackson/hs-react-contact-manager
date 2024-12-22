"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.createQueryAndSuccessSchema = void 0;
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const createQueryAndSuccessSchema = (desiredPropertiesSchema) => {
    const fields = Object.keys(desiredPropertiesSchema).join('\n            ');
    const query = (0, graphql_tag_1.default) `
    query GetContacts($limit: Int, $offset: Int) {
      CRM {
        contact_collection(limit: $limit, offset: $offset) {
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
    if (!query)
        throw new Error('Failed to generate graphql query string');
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
                }),
            }),
        }),
        extensions: zod_1.z
            .object({
            query_complexity: zod_1.z.object({
                max_points: zod_1.z.number(),
                used_points: zod_1.z.number(),
                points_for_internal_api_requests: zod_1.z.object({
                    count: zod_1.z.number(),
                    weight: zod_1.z.number(),
                    used_points: zod_1.z.number(),
                }),
                points_for_objects_retrieved: zod_1.z.object({
                    count: zod_1.z.number(),
                    weight: zod_1.z.number(),
                    used_points: zod_1.z.number(),
                }),
                points_for_properties_with_value: zod_1.z.object({
                    count: zod_1.z.number(),
                    weight: zod_1.z.number(),
                    used_points: zod_1.z.number(),
                }),
                points_for_properties_without_value: zod_1.z.object({
                    count: zod_1.z.number(),
                    weight: zod_1.z.number(),
                    used_points: zod_1.z.number(),
                }),
            }),
            rate_limit_info: zod_1.z.array(zod_1.z.object({
                interval: zod_1.z.number(),
                interval_unit: zod_1.z.string(),
                max_points: zod_1.z.number(),
                remaining_points: zod_1.z.number(),
            })),
        })
            .optional(),
    });
    return { query, SuccessSchema };
};
exports.createQueryAndSuccessSchema = createQueryAndSuccessSchema;
const main = async (context) => {
    const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
    if (typeof token !== 'string' || token.trim().length === 0)
        throw Error('Missing PRIVATE_APP_ACCESS_TOKEN');
    const { limit = 2, after = 0 } = context.parameters || {};
    const { query, SuccessSchema } = (0, exports.createQueryAndSuccessSchema)({
        email: zod_1.z.string().email().optional(),
        firstname: zod_1.z.string().optional(),
        lastname: zod_1.z.string().optional(),
        lastmodifieddate: zod_1.z.number().optional(),
        hs_content_membership_status: zod_1.z
            .object({
            label: zod_1.z.string().optional(),
            value: zod_1.z.string().optional(),
        })
            .nullable()
            .optional(),
    });
    const variables = { limit, offset: after };
    const response = await axios_1.default
        .post('https://api.hubapi.com/collector/graphql', { query, variables }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .catch((err) => {
        console.error('Error:', err);
        throw new Error(`Failed to fetch contacts: ${err.message}`);
    });
    console.log(`Received graphql response status: ${response.status} [${response.statusText}]`);
    const parsedResponse = SuccessSchema.safeParse(response.data);
    if (!parsedResponse.success) {
        console.error(`Unexpected response: ${JSON.stringify(response.data)}`);
        console.log('Zod Error:', parsedResponse.error);
        throw new Error('Failed to fetch contacts');
    }
    const { items: contacts, hasMore, offset, } = parsedResponse.data.data.CRM.contact_collection;
    return {
        contacts,
        hasMore,
        offset,
    };
};
exports.main = main;
