import { useEffect, useState } from 'react';
import {
  Button,
  Flex,
  LoadingSpinner,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';

hubspot.extend(() => <ContactManager />);

const ContactManager = ({}: {}) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageInfo, setPageInfo] = useState({
    hasNextPage: false,
    endCursor: null,
  });

  const fetchContacts = async (after = null) => {
    setLoading(true);
    setError(null);
    await hubspot
      .serverless('fetchContacts', {
        parameters: { limit: 5, after },
      })
      .then((res) => {
        if (res.status === 'SUCCESS') {
          setContacts(JSON.parse(res.response.toString()));
          setPageInfo(JSON.parse(res.response.toString()));
        } else {
          setError(`Failed to fetch contacts: ${res.message}`);
        }
      })
      .catch((err) => {
        setError('Failed to fetch contacts');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleNextPage = () => {
    if (pageInfo.hasNextPage) {
      fetchContacts(pageInfo.endCursor);
    }
  };

  if (loading) {
    return <LoadingSpinner label={'loading contacts'} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Flex direction="column" gap="medium">
      {contacts.map((contact) => (
        <Flex key={contact.id} direction="row" justify="between">
          <Text>{`${contact.properties.firstname} ${contact.properties.lastname}`}</Text>
          <Text>{contact.properties.email}</Text>
          <Text>{contact.properties.hs_content_membership_status}</Text>
        </Flex>
      ))}
      {pageInfo.hasNextPage && (
        <Button onClick={handleNextPage}>Load More</Button>
      )}
    </Flex>
  );
};
