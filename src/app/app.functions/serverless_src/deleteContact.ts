export const main = async (context: any = {}) => {
  // Expect { contactId }
  const body = JSON.parse(context.body || '{}');
  const { contactId } = body;

  const mutation = `
    mutation deleteContact($id: String!) {
      deleteContact(id: $id) {
        id
      }
    }
  `;

  const variables = { id: contactId };

  try {
    const response = await fetch('https://api.hubapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PRIVATE_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: mutation, variables }),
    });

    const json = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(json.data),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
