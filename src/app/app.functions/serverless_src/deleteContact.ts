import axios from 'axios';

export const main = async ({
  parameters,
}: {
  parameters: { id: string; email?: string };
}) => {
  const { id } = parameters;
  if (!id || typeof id !== 'string' || !id.trim()) {
    throw Error('A valid contact id must be provided to perform a delete');
  }

  const token = process.env['PRIVATE_APP_ACCESS_TOKEN_SECRET'];
  if (!token) {
    throw Error('Missing PRIVATE_APP_ACCESS_TOKEN_SECRET');
  }

  const url = `https://api.hubapi.com/crm/v3/objects/contacts/${id}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      validateStatus: () => true,
    });

    if (response.status !== 204) {
      throw Error(
        `Failed to delete contact. Expected status 204, but got ${response.status}`
      );
    }

    return { success: true };
  } catch (error) {
    throw Error(`Failed to delete contact: ${error}`);
  }
};
