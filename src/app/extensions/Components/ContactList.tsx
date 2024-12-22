import { type FC } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@hubspot/ui-extensions';
import { FetchContactsResponse } from '../../app.functions/serverless_src/fetchContacts';

interface ContactListProps {
  contacts: FetchContactsResponse['contacts'];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ContactList: FC<ContactListProps> = ({ contacts, onEdit, onDelete }) => {
  if (!contacts.length) {
    return <>No contacts found.</>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact._metadata.id}>
            <TableCell>{contact.email || 'N/A'}</TableCell>
            <TableCell>
              {`${contact.firstname || ''} ${contact.lastname || ''}`.trim()}
            </TableCell>
            <TableCell>
              {contact.hs_content_membership_status?.label || 'Unknown'}
            </TableCell>
            <TableCell>
              <Button
                onClick={() => onEdit(contact._metadata.id)}
                style={{ marginRight: 8 }}
              >
                Edit
              </Button>
              <Button onClick={() => onDelete(contact._metadata.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactList;
