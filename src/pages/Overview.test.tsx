import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Overview from './Overview';
import * as useFetchModule from '../hooks/useFetch';

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

// Helper to mock useFetch
const mockUseFetch = (value: any) => {
  vi.spyOn(useFetchModule, 'default').mockReturnValue(value);
};

describe('Overview', () => {
  it('renders loading state', () => {
    mockUseFetch({ loading: true });
    render(<Overview />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state and calls refetch on retry', () => {
    const refetch = vi.fn();
    mockUseFetch({ loading: false, error: 'Failed', refetch });
    render(<Overview />);
    expect(screen.getByText(/Error: Failed/)).toBeInTheDocument();
    fireEvent.click(screen.getByText('Retry'));
    expect(refetch).toHaveBeenCalled();
  });
});
