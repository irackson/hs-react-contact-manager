import { hubspot } from '@hubspot/ui-extensions';
import { useEffect, useState } from 'react';
import { Button, Flex, Text } from '@hubspot/ui-extensions';
import ContactFilter from './Components/ContactFilter';
import ContactForm from './Components/ContactForm';
import ContactList, { Contact } from './Components/ContactList';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <ContactManager
    context={context}
    runServerless={runServerlessFunction}
    /* @ts-expect-error addAlert missing types */
    sendAlert={actions.addAlert}
  />
));

// We'll define the needed props for this extension
interface ContactManagerProps {
  context: any;
  runServerless: any;
  sendAlert: any;
}

const ContactManager: React.FC<ContactManagerProps> = ({
  context,
  runServerless,
  sendAlert,
}) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filter, setFilter] = useState('all');
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  // Fetch contacts from the "fetchContacts" serverless function
  const fetchContacts = async (afterCursor?: string) => {
    try {
      const { response } = await runServerless({
        name: 'fetchContacts',
        parameters: {
          limit: 5,
          after: afterCursor,
        },
      });

      // response should be the JSON we returned from the serverless function
      const { results, paging } = response;
      const loadedContacts: Contact[] = results.map((c: any) => {
        const emailProp = c.properties.find((p: any) => p.name === 'email');
        const nameProp = c.properties.find((p: any) => p.name === 'firstname');
        const statusProp = c.properties.find(
          (p: any) => p.name === 'hs_content_membership_status'
        );
        return {
          id: c.id,
          email: emailProp?.value || '',
          name: nameProp?.value || '',
          status: statusProp?.value || 'N/A',
        };
      });

      setContacts(loadedContacts);
      if (paging?.next?.after) {
        setHasNextPage(true);
        setAfter(paging.next.after);
      } else {
        setHasNextPage(false);
        setAfter(null);
      }
    } catch (error: any) {
      sendAlert({
        message: `Error fetching contacts: ${error}`,
        type: 'error',
      });
    }
  };

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter logic
  const filteredContacts = contacts.filter((c) => {
    if (filter === 'all') return true;
    return c.status === filter;
  });

  const editingContact = contacts.find((c) => c.id === editingContactId);

  // CREATE
  const handleAddContact = async (contactData: {
    email: string;
    name: string;
    status: string;
  }) => {
    try {
      const { response } = await runServerless({
        name: 'createContact',
        parameters: contactData,
      });
      if (response) {
        sendAlert({ message: 'Contact created!', type: 'success' });
        await fetchContacts();
      }
    } catch (error: any) {
      sendAlert({ message: `Error creating contact: ${error}`, type: 'error' });
    }
  };

  // UPDATE
  const handleUpdateContact = async (contactData: {
    email: string;
    name: string;
    status: string;
  }) => {
    if (!editingContactId) return;
    try {
      const { response } = await runServerless({
        name: 'updateContact',
        parameters: {
          contactId: editingContactId,
          ...contactData,
        },
      });
      if (response) {
        setEditingContactId(null);
        sendAlert({ message: 'Contact updated!', type: 'success' });
        await fetchContacts();
      }
    } catch (error: any) {
      sendAlert({ message: `Error updating contact: ${error}`, type: 'error' });
    }
  };

  // DELETE
  const handleDeleteContact = async (contactId: string) => {
    try {
      const { response } = await runServerless({
        name: 'deleteContact',
        parameters: { contactId },
      });
      if (response) {
        sendAlert({ message: 'Contact deleted!', type: 'info' });
        setContacts((prev) => prev.filter((c) => c.id !== contactId));
      }
    } catch (error: any) {
      sendAlert({ message: `Error deleting contact: ${error}`, type: 'error' });
    }
  };

  const handleLoadMore = async () => {
    if (hasNextPage && after) {
      await fetchContacts(after);
    }
  };

  return (
    <Flex direction="column" gap="small" style={{ maxWidth: 600 }}>
      <Text format={{ fontWeight: 'bold' }}>Contact Manager</Text>

      <ContactFilter filter={filter} onChangeFilter={setFilter} />

      <ContactForm
        onSubmit={editingContact ? handleUpdateContact : handleAddContact}
        existingContact={
          editingContact
            ? {
                email: editingContact.email,
                name: editingContact.name,
                status: editingContact.status,
              }
            : undefined
        }
      />

      <ContactList
        contacts={filteredContacts}
        onEdit={(id) => setEditingContactId(id)}
        onDelete={handleDeleteContact}
      />

      {hasNextPage && <Button onClick={handleLoadMore}>Load More</Button>}
    </Flex>
  );
};

export default ContactManager;
