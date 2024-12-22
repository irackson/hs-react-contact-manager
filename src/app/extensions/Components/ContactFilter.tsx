import { type FC } from 'react';
import { Select, Flex } from '@hubspot/ui-extensions';

interface ContactFilterProps {
  filter: string;
  onChangeFilter: (val: string) => void;
}

const ContactFilter: FC<ContactFilterProps> = ({ filter, onChangeFilter }) => {
  return (
    <Flex direction="column" gap="small">
      <h1>Filter by status:</h1>
      <Select
        name="statusFilter"
        value={filter}
        onChange={(val) => onChangeFilter(String(val))}
        options={[
          { label: 'All', value: 'all' },
          { label: 'Active', value: 'ACTIVE' },
          { label: 'Inactive', value: 'INACTIVE' },
        ]}
      />
    </Flex>
  );
};

export default ContactFilter;
