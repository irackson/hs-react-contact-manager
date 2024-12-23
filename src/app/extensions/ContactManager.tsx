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
  Flex,
  Box,
  Divider,
  ButtonRow,
  ErrorState,
  hubspot,
} from '@hubspot/ui-extensions';
import { CrmPropertyList, CrmActionButton } from '@hubspot/ui-extensions/crm';
import {
  type FetchContactsParameters,
  type FetchContactsResponse,
} from '../app.functions/serverless_src/fetchContacts';
import { type CreateContactsParameters } from '../app.functions/serverless_src/createContact';

hubspot.extend(({ actions, context }) => (
  <ContactManager addAlert={actions['addAlert']} context={context} />
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
  context,
}: {
  addAlert: (args: {
    title: string;
    message: string;
    type: 'info' | 'tip' | 'success' | 'warning' | 'danger';
  }) => void;
  context: Parameters<Parameters<typeof hubspot.extend>[0]>[0]['context'];
}) => {
  const [loading, setLoading] = useState(true);
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

  const fetchContacts = async (
    withPagingReset = false,
    offsetOverride?: number
  ) => {
    setLoading(true);
    setError(null);
    try {
      const actualOffset =
        offsetOverride !== undefined
          ? offsetOverride
          : withPagingReset
          ? 0
          : pageInfo.offset;
      const {
        contacts: fetchedContacts,
        hasMore: fetchedHasMore,
        offset: fetchedOffset,
        total: fetchedTotal,
      } = (await hubspot.serverless('fetchContacts', {
        parameters: {
          pageInfo: {
            offset: actualOffset,
            limit: pageInfo.limit,
          },
          statusFilterOptions,
          orderBy: [
            { propertyName: 'email', ascending: true },
            { propertyName: 'hs_object_id', ascending: true },
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

  const handleDeleteContact = async ({
    id,
    email,
  }: {
    id: string;
    email: string | undefined;
  }) => {
    try {
      const __deleteResponse = await hubspot.serverless('deleteContact', {
        parameters: { id },
      });
      addAlert({
        title: 'Contact Deleted',
        type: 'success',
        message: `The delete of Contact ${
          email?.length ? email : id
        } has successfully occurred.`,
      });

      //! wait for the search index to update after delete
      await new Promise((r) => setTimeout(r, 8_000));
      await fetchContacts(true);
    } catch (err) {
      addAlert({
        title: 'Contact Delete Failed',
        type: 'danger',
        message: `Something went wrong when deleting ${
          email?.length ? email : id
        }.`,
      });
      setError('Failed to delete contact');
    }
  };

  const handleCreateContact = async () => {
    try {
      setLoading(true);
      const { id } = await hubspot.serverless('createContact', {
        parameters: {
          waitForSearchIndexUpdate: true,
        } satisfies CreateContactsParameters,
      });
      //! wait extra time for the search index to update after create
      await new Promise((r) => setTimeout(r, 1_000));
      await fetchContacts(true);
      setFocusedContactId(id);
    } catch (err) {
      setError('Failed to create new contact');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner label="Loading..." />;
  if (error)
    return (
      <ErrorState title="Error">
        <Text>Please try again in a few moments.</Text>
        <CrmActionButton
          actionType="RECORD_APP_LINK"
          actionContext={{
            objectTypeId: '0-1',
            objectId: context['crm']['objectId'],
            includeEschref: false,
          }}
          variant="secondary"
        >
          Try Again
        </CrmActionButton>
      </ErrorState>
    );

  return (
    <>
      {
        <>
          <Flex direction={'column'} align={'start'} gap={'xs'}>
            <Divider />
            <Button
              onClick={async () => {
                await handleCreateContact();
              }}
              variant="primary"
            >
              Create New Contact
            </Button>
            {focusedContactId && (
              <>
                <Divider />
                <Box>
                  <Text format={{ fontWeight: 'bold' }}>
                    {`Editing Contact ${focusedContactId}`}
                  </Text>
                </Box>
                <Box alignSelf={'stretch'}>
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
                </Box>
                <Divider />
              </>
            )}
          </Flex>
        </>
      }

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
        variant={'transparent'}
        onChange={(vals) => {
          setStatusFilterOptions({
            includeActive: vals.includes('active'),
            includeInactive: vals.includes('inactive'),
            includeEmpty: vals.includes('empty'),
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
          showFirstLastButtons={true}
          bordered={true}
          showButtonLabels={true}
          maxVisiblePageButtons={5}
          flush={false}
          paginated
          pageCount={
            typeof pageInfo.total === 'number'
              ? Math.ceil(pageInfo.total / pageInfo.limit)
              : 1
          }
          page={pageInfo.currentPage}
          onPageChange={async (newPageNumber) => {
            const newOffset = (newPageNumber - 1) * pageInfo.limit;
            setPageInfo((curr) => ({
              ...curr,
              offset: newOffset,
              currentPage: newPageNumber,
            }));
            await fetchContacts(false, newOffset);
          }}
        >
          <TableHead>
            <TableRow>
              <TableHeader>Email</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageInfo.contacts.map((contact) => {
              const {
                email,
                firstname,
                lastname,
                hs_content_membership_status,
                _metadata: { id },
              } = contact;

              return (
                <TableRow key={id}>
                  <TableCell>{email?.length ? email : '--'}</TableCell>
                  <TableCell>
                    {firstname?.length || lastname?.length
                      ? `${firstname ?? ''} ${lastname ?? ''}`
                      : '--'}
                  </TableCell>
                  <TableCell>
                    {hs_content_membership_status?.label || '--'}
                  </TableCell>
                  <TableCell>
                    <ButtonRow
                      dropDownButtonOptions={{
                        text: 'Extra',
                        size: 'sm',
                        variant: 'transparent',
                      }}
                    >
                      <Button
                        variant="primary"
                        onClick={() => {
                          setFocusedContactId(id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={async () => {
                          await handleDeleteContact({ id, email });
                        }}
                      >
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
                    </ButtonRow>
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
