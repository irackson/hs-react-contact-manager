import { useState, type FC } from 'react';
import { Input, Button, Select, Flex } from '@hubspot/ui-extensions';

interface ContactFormProps {
  onSubmit: (contactData: {
    email: string;
    name: string;
    status: string;
  }) => void;
  existingContact?: { email: string; name: string; status: string };
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit, existingContact }) => {
  const [email, setEmail] = useState(existingContact?.email || '');
  const [name, setName] = useState(existingContact?.name || '');
  const [status, setStatus] = useState(existingContact?.status || 'ACTIVE');

  // Minimal validation
  const validateForm = (): boolean => {
    return email.trim() !== '' && name.trim() !== '';
  };

  // Instead of a <form> submit, we do a button onClick
  const handleClick = () => {
    if (!validateForm()) {
      alert('Email and Name are required.');
      return;
    }
    onSubmit({ email, name, status });
    // If adding a new contact, clear the fields
    if (!existingContact) {
      setEmail('');
      setName('');
      setStatus('ACTIVE');
    }
  };

  return (
    <Flex direction="column" gap="small">
      <Input
        name="email"
        label="Email"
        type="text"
        value={email}
        onInput={(val) => setEmail(val)}
        required
      />
      <Input
        name="name"
        label="Name"
        value={name}
        onInput={(val) => setName(val)}
        required
      />
      <Select
        name="status"
        label="Status"
        value={status}
        onChange={(val) => setStatus(String(val))}
        options={[
          { label: 'Active', value: 'ACTIVE' },
          { label: 'Inactive', value: 'INACTIVE' },
        ]}
      />
      <Button onClick={handleClick}>
        {existingContact ? 'Update Contact' : 'Add Contact'}
      </Button>
    </Flex>
  );
};

export default ContactForm;
