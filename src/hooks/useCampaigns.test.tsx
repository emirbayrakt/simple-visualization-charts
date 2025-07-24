import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import useCampaigns from './useCampaigns';
import { CampaignsContext } from '../context/CampaignsContext';
import React from 'react';
import type { CampaignsContextType } from '../context/CampaignsContext';

const mockContextValue: CampaignsContextType = {
  campaigns: [],
  loading: false,
  error: null,
  selectedId: null,
  selectCampaign: () => {},
  addCampaign: () => {},
  refetch: () => {},
};

describe('useCampaigns', () => {
  it('should throw if not wrapped in CampaignsProvider', () => {
    expect(() => {
      renderHook(() => useCampaigns());
    }).toThrow('useCampaigns must be used within <CampaignsProvider>');
  });

  it('should return context value if wrapped in CampaignsProvider', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CampaignsContext.Provider value={mockContextValue}>
        {children}
      </CampaignsContext.Provider>
    );
    const { result } = renderHook(() => useCampaigns(), { wrapper });
    expect(result.current).toBe(mockContextValue);
  });
});
