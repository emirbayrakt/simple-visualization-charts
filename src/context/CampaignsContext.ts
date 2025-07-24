import { createContext } from 'react';
import type { Campaign } from '../api/campaigns';

/* eslint-disable no-unused-vars */
export type CampaignsContextType = {
  campaigns: Campaign[];
  loading: boolean;
  error: string | null;
  selectedId: string | null;
  selectCampaign: (id: string) => void;
  addCampaign: (c: Campaign) => void;
  refetch: () => void;
};

export const CampaignsContext = createContext<CampaignsContextType | null>(
  null,
);
