"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const main = async (context = {}) => {
    // We expect JSON body like: { email, name, status }
    const body = JSON.parse(context.body || '{}');
    const { email, name, status } = body;
    const mutation = `
    mutation createAContact($properties: [ContactInputPropertyInput!]!) {
      createContact(properties: $properties) {
        id
        properties {
          name
          value
        }
      }
    }
  `;
    const variables = {
        properties: [
            { name: 'email', value: email },
            { name: 'firstname', value: name },
            // Using hs_content_membership_status for "status"
            { name: 'hs_content_membership_status', value: status || 'ACTIVE' },
        ],
    };
    try {
        const response = await fetch('https://api.hubapi.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_TOKEN}`,
            },
            body: JSON.stringify({ query: mutation, variables }),
        });
        const json = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(json.data),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
exports.main = main;
