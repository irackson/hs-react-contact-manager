import { useEffect, useState, useCallback } from 'react';
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
import { CrmPropertyList, CrmActionButton } from '@hubspot/ui-extensions/crm';
import {
  type FetchContactsParameters,
  type FetchContactsResponse,
} from '../app.functions/serverless_src/fetchContacts';
import { type CreateContactsParameters } from '../app.functions/serverless_src/createContact';

hubspot.extend(({ actions }) => (
  <ContactManager addAlert={actions['addAlert']} />
));

const initialPageInfo: FetchContactsParameters['pageInfo'] & {
  hasMore: boolean | null;
  total: number | null;
  currentPage: number;
  contacts: FetchContactsResponse['contacts'];
} = {
  hasMore: null,
  total: null,
  offset: 0,
  limit: 5,
  currentPage: 1,
  contacts: [],
};
const ContactManager = ({
  addAlert,
}: {
  addAlert: (args: {
    title: string;
    message: string;
    type: 'info' | 'tip' | 'success' | 'warning' | 'danger';
  }) => void;
}) => {
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

  const [focusedContactId, setFocusedContactId] = useState<string | null>(null);

  const fetchContacts = useCallback(
    async (withPagingReset = false) => {
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
    },
    [pageInfo.offset, pageInfo.limit, statusFilterOptions]
  );

  useEffect(() => {
    if (
      !statusFilterOptions.includeActive &&
      !statusFilterOptions.includeInactive &&
      !statusFilterOptions.includeEmpty
    )
      return;
    fetchContacts(true);
  }, [statusFilterOptions, fetchContacts]);

  const handleDeleteContact = async ({
    id,
    email,
  }: {
    id: string;
    email: string | undefined;
  }) =>
    await hubspot
      .serverless('deleteContact', {
        parameters: { id },
      })
      .then(async () => {
        addAlert({
          title: 'Contact Deleted',
          type: 'success',
          message: `The delete of Contact ${
            email?.length ? email : id
          } has successfully occurred.`,
        });
        await fetchContacts(true);
      })
      .catch((err) => {
        addAlert({
          title: 'Contact Delete Failed',
          type: 'danger',
          message: `Something went wrong when deleting ${
            email?.length ? email : id
          }`,
        });
        setError('Failed to delete contact');
      });

  const handleCreateContact = async () => {
    try {
      setLoading(true);
      const { id } = await hubspot.serverless('createContact', {
        parameters: {
          waitForSearchIndexUpdate: true,
        } satisfies CreateContactsParameters,
      });
      fetchContacts(true);
      setFocusedContactId(id);
      setLoading(false);
    } catch (err) {
      setError('Failed to create new contact');
    }
  };

  if (loading) return <LoadingSpinner label="Loading..." />;
  if (error) return <Text>{error}</Text>;

  return (
    <>
      <Button
        onClick={async () => {
          await handleCreateContact();
        }}
      >
        Create New Contact
      </Button>

      {focusedContactId && (
        <CrmPropertyList
          properties={[
            'email',
            'firstname',
            'lastname',
            'hs_content_membership_status',
          ]}
          direction="row"
          objectTypeId="0-1"
          objectId={Number(focusedContactId)}
        />
      )}

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
        onChange={(value) => {
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
          paginated
          pageCount={
            typeof pageInfo.total === 'number'
              ? pageInfo.total / pageInfo.limit
              : 1
          }
          page={pageInfo.currentPage}
          onPageChange={(newPageNumber) => {
            setPageInfo((curr) => ({
              ...curr,
              offset: (newPageNumber - 1) * curr.limit,
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
            {pageInfo.contacts.map((contact) => {
              const {
                firstname,
                lastname,
                email,
                hs_content_membership_status,
                _metadata: { id },
              } = contact;

              return (
                <TableRow key={id}>
                  <TableCell>
                    {firstname?.length > 0 || lastname?.length > 0
                      ? `${firstname} ${lastname}`
                      : '--'}
                  </TableCell>
                  <TableCell>{email?.length > 0 ? email : '--'}</TableCell>
                  <TableCell>
                    {hs_content_membership_status?.label || '--'}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setFocusedContactId(id);
                      }}
                    >
                      Edit
                    </Button>

                    <Button onClick={() => handleDeleteContact({ id, email })}>
                      Delete
                    </Button>

                    <CrmActionButton
                      actionType="RECORD_APP_LINK"
                      actionContext={{
                        objectTypeId: '0-1',
                        objectId: Number(id),
                        includeEschref: true,
                      }}
                      variant="secondary"
                    >
                      View
                    </CrmActionButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default ContactManager;
