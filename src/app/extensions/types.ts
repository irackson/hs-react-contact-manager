export interface Contact {
  _metadata: {
    id: string;
  };
  email?: string;
  firstname?: string;
  lastname?: string;
  lastmodifieddate?: number;
  hs_content_membership_status?: {
    label?: string;
    value?: string;
  };
}

export interface PaginatedContactsResponse {
  contacts: Contact[];
  hasMore: boolean;
  offset: number;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: number | null;
}
