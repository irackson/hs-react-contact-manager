import { useEffect, useState } from 'react';
import {
  Button,
  Flex,
  LoadingSpinner,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';
import { type FetchContactsResponse } from '../app.functions/serverless_src/fetchContacts';

hubspot.extend(() => <ContactManager />);

const ContactManager = () => {
  // Typed State Variables
  const [contacts, setContacts] = useState<FetchContactsResponse['contacts']>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageInfo, setPageInfo] = useState<{
    hasNextPage: FetchContactsResponse['hasMore'];
    endCursor: FetchContactsResponse['offset'];
  }>({
    hasNextPage: false,
    endCursor: null,
  });

  // Fetch Contacts Function
  const fetchContacts = async (after: number | null = null) => {
    setLoading(true);
    setError(null);

    try {
      const {
        contacts,
        hasMore: hasNextPage,
        offset: endCursor,
      } = (await hubspot.serverless('fetchContacts', {
        parameters: { limit: 5, after },
      })) as FetchContactsResponse;
      setContacts((prev) => (after ? [...prev, ...contacts] : contacts));
      setPageInfo({
        endCursor,
        hasNextPage,
      });
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  // Fetch Initial Data on Component Mount
  useEffect(() => {
    fetchContacts();
  }, []);

  // Pagination Handler
  const handleNextPage = () => {
    if (pageInfo.hasNextPage) {
      fetchContacts(pageInfo.endCursor);
    }
  };

  // Loading State
  if (loading) {
    return <LoadingSpinner label={'loading contacts'} />;
  }

  // Error State
  if (error) {
    return <Text>{error}</Text>;
  }

  // Render Contacts
  return (
    <Flex direction="column" gap="medium">
      {contacts.map((contact) => (
        <Flex key={contact._metadata.id} direction="row" justify="between">
          <Text>
            {`${contact.firstname || ''} ${contact.lastname || ''}`.trim()}
          </Text>
          <Text>{contact.email || 'N/A'}</Text>
          <Text>
            {contact.hs_content_membership_status?.label || 'Unknown'}
          </Text>
        </Flex>
      ))}
      {pageInfo.hasNextPage && (
        <Button onClick={handleNextPage}>Load More</Button>
      )}
    </Flex>
  );
};

export default ContactManager;
