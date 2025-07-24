import { useContext } from 'react';
import { CampaignsContext } from '../context/CampaignsContext';

const useCampaigns = () => {
  const ctx = useContext(CampaignsContext);
  if (!ctx) {
    throw new Error('useCampaigns must be used within <CampaignsProvider>');
  }
  return ctx;
};

export default useCampaigns;
