import { type FC } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@hubspot/ui-extensions';

export interface Contact {
  id: string;
  email: string;
  name: string;
  status: string;
}

interface ContactListProps {
  contacts: Contact[];
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
          <TableRow key={contact.id}>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.status}</TableCell>
            <TableCell>
              <Button
                onClick={() => onEdit(contact.id)}
                style={{ marginRight: 8 }}
              >
                Edit
              </Button>
              <Button onClick={() => onDelete(contact.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactList;
