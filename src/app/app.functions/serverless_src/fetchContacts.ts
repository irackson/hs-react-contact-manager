export const main = async (context: any = {}) => {
  // context.parameters.* or context.queryParameters.* can hold limit/after
  const { limit = 5, after } = context.parameters || {};

  const query = `
    query getContacts($limit: Int!, $after: String) {
      contacts(limit: $limit, after: $after) {
        results {
          id
          properties {
            name
            value
          }
        }
        paging {
          next {
            after
          }
        }
      }
    }
  `;

  const variables = {
    limit: typeof limit === 'string' ? parseInt(limit, 10) : limit,
    after: after || null,
  };

  try {
    const response = await fetch('https://api.hubapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();
    // Return the entire "contacts" object
    return {
      statusCode: 200,
      body: JSON.stringify(json.data.contacts),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
