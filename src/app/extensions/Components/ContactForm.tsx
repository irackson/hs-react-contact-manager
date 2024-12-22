import { useState, type FC, type FormEvent } from 'react';
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

  const validateForm = () => {
    return email.trim() !== '' && name.trim() !== '';
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Email and Name are required.');
      return;
    }
    onSubmit({ email, name, status });
    if (!existingContact) {
      setEmail('');
      setName('');
      setStatus('ACTIVE');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="small" direction="column">
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
        <Button type="submit">
          {existingContact ? 'Update Contact' : 'Add Contact'}
        </Button>
      </Flex>
    </form>
  );
};

export default ContactForm;
