"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const axios_1 = __importDefault(require("axios"));
const main = async (context = {}) => {
    const { limit = 1, after = 0 } = context.parameters || {};
    const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
    const query = `
    query GetContacts($limit: Int, $offset: Int) {
      CRM {
        contact_collection(
          limit: $limit,
          offset: $offset,
          orderBy: hs_object_id__desc
        ) {
          items {
            _metadata {
              id
            }
            email
            firstname
            lastname
            hs_content_membership_status
          }
          hasMore
          offset
        }
      }
    }
  `;
    const variables = { limit, offset: after };
    try {
        const response = await axios_1.default.post('https://api.hubapi.com/collector/graphql', { query, variables }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        console.log({ response });
        const { data } = response;
        if (data.errors) {
            throw new Error(data.errors.map((err) => err.message).join(', '));
        }
        console.log(JSON.stringify(response.data));
        const contactCollection = data.data.CRM.contact_collection;
        return {
            contacts: contactCollection.items,
            pageInfo: {
                hasNextPage: contactCollection.hasMore,
                endCursor: contactCollection.offset,
            },
        };
    }
    catch (error) {
        console.error('Error fetching contacts:', error);
        throw new Error('Failed to fetch contacts');
    }
};
exports.main = main;
