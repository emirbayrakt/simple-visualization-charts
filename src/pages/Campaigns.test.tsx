import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CampaignsPage from './Campaigns';
import * as useCampaignsModule from '../hooks/useCampaigns';

// Mock child components
vi.mock('../components/Loading', () => ({
  default: () => <div>Loading...</div>,
}));
vi.mock('../components/ErrorMessage', () => ({
  default: ({ error, onRetry }: any) => (
    <div>
      Error: {error}
      <button onClick={onRetry}>Retry</button>
    </div>
  ),
}));

// Helper to mock useCampaigns
const mockUseCampaigns = (value: any) => {
  vi.spyOn(useCampaignsModule, 'default').mockReturnValue(value);
};

describe('CampaignsPage', () => {
  it('renders loading state', () => {
    mockUseCampaigns({ loading: true });
    render(<CampaignsPage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state and calls refetch on retry', () => {
    const refetch = vi.fn();
    mockUseCampaigns({ loading: false, error: 'Failed', refetch });
    render(<CampaignsPage />);
    expect(screen.getByText(/Error: Failed/)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Retry'));
    expect(refetch).toHaveBeenCalled();
  });
});
