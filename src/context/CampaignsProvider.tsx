import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { fetchCampaigns, Campaign } from '../api/campaigns';
import { CampaignsContext } from './CampaignsContext';

const CampaignsProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error, refetch, setData } = useFetch(fetchCampaigns);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // initialize selectedId with the first campaign's id if available
  useEffect(() => {
    if (data?.length && !selectedId) {
      setSelectedId(data[0].id);
    }
  }, [data, selectedId]);

  // Reset selectedId when data changes
  const addCampaign = (c: Campaign) => {
    setData((prev) => (prev ? [...prev, c] : [c]));
    setSelectedId(c.id);
  };

  const value = {
    campaigns: data || [],
    loading,
    error,
    selectedId,
    selectCampaign: setSelectedId,
    addCampaign,
    refetch,
  };

  return (
    <CampaignsContext.Provider value={value}>
      {children}
    </CampaignsContext.Provider>
  );
};

export default CampaignsProvider;
