export const main = async (context: any = {}) => {
  // Expect { contactId, email, name, status }
  const body = JSON.parse(context.body || '{}');
  const { contactId, email, name, status } = body;

  const mutation = `
    mutation updateAContact($id: String!, $properties: [ContactInputPropertyInput!]!) {
      updateContact(id: $id, properties: $properties) {
        id
      }
    }
  `;

  const variables = {
    id: contactId,
    properties: [
      { name: 'email', value: email },
      { name: 'firstname', value: name },
      { name: 'hs_content_membership_status', value: status },
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
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};