"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const axios_1 = __importDefault(require("axios"));
const main = async (context = {}) => {
    const { limit = 5, after } = context.parameters || {};
    const token = process.env['PRIVATE_APP_ACCESS_TOKEN'];
    const query = `
    query GetContacts($limit: Int, $after: String) {
      contacts(limit: $limit, after: $after) {
        edges {
          node {
            id
            properties {
              email
              firstname
              lastname
              hs_content_membership_status
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;
    const variables = { limit, after };
    try {
        const response = await axios_1.default.post('https://api.hubapi.com/collector/graphql', { query, variables }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const { data } = response;
        if (data.errors) {
            throw new Error(data.errors.map((err) => err.message).join(', '));
        }
        return {
            contacts: data.data.contacts.edges.map((edge) => edge.node),
            pageInfo: data.data.contacts.pageInfo,
        };
    }
    catch (error) {
        console.error('Error fetching contacts:', error);
        throw new Error('Failed to fetch contacts');
    }
};
exports.main = main;
