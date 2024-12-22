import axios from 'axios';

export const main = async (context: any = {}) => {
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
    const response = await axios.post(
      'https://api.hubapi.com/collector/graphql',
      { query, variables },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data } = response;
    if (data.errors) {
      throw new Error(data.errors.map((err: any) => err.message).join(', '));
    }

    return {
      contacts: data.data.contacts.edges.map((edge: any) => edge.node),
      pageInfo: data.data.contacts.pageInfo,
    };
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw new Error('Failed to fetch contacts');
  }
};
