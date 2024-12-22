import { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Modal,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  EmptyState,
  Select,
  LoadingSpinner,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';
import {
  type FetchContactsParameters,
  type FetchContactsResponse,
} from '../app.functions/serverless_src/fetchContacts';

hubspot.extend(() => <ContactManager />);

const ContactManager = () => {
  const [contacts, setContacts] = useState<FetchContactsResponse['contacts']>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageInfo, setPageInfo] = useState<
    FetchContactsParameters['pageInfo'] & {
      hasMore: boolean | null;
      total: number | null;
      currentPage: number;
    }
  >({
    hasMore: null,
    total: null,
    offset: 0,
    limit: 5,
    currentPage: 1,
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentContact, setCurrentContact] = useState<{
    id?: string;
    email: string;
    firstname: string;
    lastname: string;
    status: string;
  } | null>(null);
  const [filter, setFilter] = useState<FetchContactsParameters['filter']>(null);
  const [orderBy, setOrderBy] = useState<FetchContactsParameters['orderBy']>({
    propertyName: 'hs_object_id',
    ascending: false,
  });

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const {
        contacts: fetchedContacts,
        hasMore: fetchedHasMore,
        offset: fetchedOffset,
        total: fetchedTotal,
      } = (await hubspot.serverless('fetchContacts', {
        parameters: {
          pageInfo: {
            offset: pageInfo.offset,
            limit: pageInfo.limit,
          },
          filter,
          orderBy,
        } satisfies FetchContactsParameters,
      })) as FetchContactsResponse;

      setContacts(fetchedContacts);
      setPageInfo(({ limit, currentPage }) => ({
        currentPage,
        limit,
        hasMore: fetchedHasMore,
        offset: fetchedOffset,
        total: fetchedTotal,
      }));
    } catch (err) {
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleSaveContact = async () => {
    if (!currentContact) return;
    try {
      await hubspot.serverless(
        currentContact.id ? 'updateContact' : 'addContact',
        {
          parameters: currentContact,
        }
      );
      setShowModal(false);
      fetchContacts();
    } catch (err) {
      setError('Failed to save contact');
    }
  };

  const handleDeleteContact = async (id: string) => {
    try {
      await hubspot.serverless('deleteContact', { parameters: { id } });
      fetchContacts();
    } catch (err) {
      setError('Failed to delete contact');
    }
  };

  if (loading) return <LoadingSpinner label="Loading contacts..." />;
  if (error) return <Text>{error}</Text>;

  return (
    <>
      <Button
        onClick={() => {
          setCurrentContact(null);
          setShowModal(true);
        }}
      >
        Add Contact
      </Button>
      <Select
        options={[
          { label: 'All', value: 'all' },
          { label: 'Active', value: 'active' },
          { label: 'Inactive', value: 'inactive' },
        ]}
        value={filter?.value ? filter.value : 'all'}
        onChange={(value) => {
          setFilter(
            value === 'all'
              ? null
              : {
                  propertyName: 'hs_content_membership_status',
                  value: String(value),
                }
          );
          fetchContacts();
        }}
      />
      <Button
        onClick={() => {
          setOrderBy(({ propertyName, ascending }) => ({
            propertyName,
            ascending: !ascending,
          }));
          fetchContacts();
        }}
      >
        Toggle Order
      </Button>
      {contacts.length === 0 ? (
        <EmptyState title="No Contacts Found" flush={false}>
          <Text>Try adding a new contact or adjusting your filters.</Text>
        </EmptyState>
      ) : (
        <Table
          paginated={true}
          pageCount={
            typeof pageInfo.total === 'number'
              ? Math.ceil(pageInfo.total / pageInfo.limit)
              : 1
          }
          page={pageInfo.currentPage}
          onPageChange={(newPageNumber) => {
            setPageInfo((currPageInfo) => ({
              ...currPageInfo,
              offset: (newPageNumber - 1) * currPageInfo.limit,
              currentPage: newPageNumber,
            }));
            fetchContacts();
          }}
        >
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._metadata.id}>
                <TableCell>{`${contact.firstname} ${contact.lastname}`}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>
                  {contact.hs_content_membership_status?.label || 'Unknown'}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      setCurrentContact({
                        id: contact._metadata.id,
                        email: contact.email || '',
                        firstname: contact.firstname || '',
                        lastname: contact.lastname || '',
                        status:
                          contact.hs_content_membership_status?.value ||
                          'Inactive',
                      });
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteContact(contact._metadata.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {showModal && (
        <Modal
          id="contact-modal"
          title={currentContact ? 'Edit Contact' : 'Add Contact'}
          onClose={() => setShowModal(false)}
        >
          <Input
            label="First Name"
            name="firstname"
            value={currentContact?.firstname || ''}
            onChange={(value) =>
              setCurrentContact({ ...currentContact, firstname: value })
            }
          />
          <Input
            label="Last Name"
            name="lastname"
            value={currentContact?.lastname || ''}
            onChange={(value) =>
              setCurrentContact({ ...currentContact, lastname: value })
            }
          />
          <Input
            label="Email"
            name="email"
            value={currentContact?.email || ''}
            onChange={(value) =>
              setCurrentContact({ ...currentContact, email: value })
            }
          />
          <Select
            label="Status"
            name="status"
            options={[
              { label: 'Active', value: 'Active' },
              { label: 'Inactive', value: 'Inactive' },
            ]}
            value={currentContact?.status || 'Active'}
            onChange={(value) =>
              setCurrentContact({ ...currentContact, status: value as string })
            }
          />
          <Button onClick={handleSaveContact}>Save</Button>
        </Modal>
      )}
    </>
  );
};

export default ContactManager;
