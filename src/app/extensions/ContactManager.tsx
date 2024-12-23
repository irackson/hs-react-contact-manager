import { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  EmptyState,
  MultiSelect,
  LoadingSpinner,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';
import { CrmPropertyList } from '@hubspot/ui-extensions/crm';
import {
  type FetchContactsParameters,
  type FetchContactsResponse,
} from '../app.functions/serverless_src/fetchContacts';

hubspot.extend(() => <ContactManager />);

const initialPageInfo: FetchContactsParameters['pageInfo'] & {
  hasMore: boolean | null;
  total: number | null;
  currentPage: number;
  contacts: FetchContactsResponse['contacts'];
} = {
  hasMore: null,
  total: null,
  offset: 0,
  limit: 25,
  currentPage: 1,
  contacts: [],
};
const ContactManager = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [pageInfo, setPageInfo] = useState(initialPageInfo);

  const [statusFilterOptions, setStatusFilterOptions] = useState<
    FetchContactsParameters['statusFilterOptions']
  >({
    includeActive: true,
    includeInactive: true,
    includeEmpty: true,
  });

  const fetchContacts = async (withPagingReset = false) => {
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
            offset: withPagingReset ? 0 : pageInfo.offset,
            limit: pageInfo.limit,
          },
          statusFilterOptions,
          orderBy: [
            {
              propertyName: 'email',
              ascending: true,
            },
            {
              propertyName: 'hs_object_id',
              ascending: true,
            },
          ],
        } satisfies FetchContactsParameters,
      })) as FetchContactsResponse;

      setPageInfo(({ limit, currentPage }) => ({
        currentPage: withPagingReset ? 1 : currentPage,
        limit,
        hasMore: fetchedHasMore,
        offset: fetchedOffset,
        total: fetchedTotal,
        contacts: fetchedContacts,
      }));
    } catch (err) {
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      !statusFilterOptions.includeActive &&
      !statusFilterOptions.includeInactive &&
      !statusFilterOptions.includeEmpty
    )
      return;
    fetchContacts(true);
  }, [statusFilterOptions]);

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
          // todo
        }}
      >
        {`Create New Contact`}
      </Button>

      <CrmPropertyList
        /* only render if editing a contact */
        properties={[
          'email',
          'firstname',
          'lastname',
          'hs_content_membership_status',
        ]}
        direction="row"
        objectTypeId="0-1"
        objectId={
          1234 /* if editing from the table, use id of selected contact in table. if used after creating new contact, use id returned by create function. only provide this parameter if the edit contact button has just been clicked or create new has just been clicked. by omitting this parameter, the contact from the url will be used (i.e. if the ui extension is rendering from https://app.hubspot.com/contacts/48631558/record/0-1/86494764070, then 86494764070 will be assumed automatically, which is fine) */
        }
      />
      <MultiSelect
        value={(() => {
          const selectedValues: string[] = [];
          if (statusFilterOptions.includeActive) selectedValues.push('active');
          if (statusFilterOptions.includeInactive)
            selectedValues.push('inactive');
          if (statusFilterOptions.includeEmpty) selectedValues.push('empty');
          return selectedValues;
        })()}
        placeholder="Filter by Status"
        label="Select Status(es)"
        name="statusFilter"
        required={false}
        onChange={async (value) => {
          setStatusFilterOptions({
            includeActive: value.includes('active'),
            includeInactive: value.includes('inactive'),
            includeEmpty: value.includes('empty'),
          });
        }}
        options={[
          { label: 'Active', value: 'active' },
          { label: 'Inactive', value: 'inactive' },
          { label: 'Empty', value: 'empty' },
        ]}
      />
      {pageInfo.contacts.length === 0 ||
      (!statusFilterOptions.includeActive &&
        !statusFilterOptions.includeEmpty &&
        !statusFilterOptions.includeInactive) ? (
        <EmptyState title="No Contacts Found" flush={false}>
          <Text>Try adding a new contact or adjusting your filters.</Text>
        </EmptyState>
      ) : (
        <Table
          paginated={true}
          pageCount={
            typeof pageInfo.total === 'number'
              ? pageInfo.total / pageInfo.limit
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
            {pageInfo.contacts.map((contact) => (
              <TableRow key={contact._metadata.id}>
                <TableCell>{`${contact.firstname} ${contact.lastname}`}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>
                  {contact.hs_content_membership_status?.label || '--'}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      // todo
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
    </>
  );
};

export default ContactManager;
