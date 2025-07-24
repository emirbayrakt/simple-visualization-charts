import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import useFetch from './useFetch';

const flushPromises = () => new Promise((resolve) => setTimeout(resolve));

describe('useFetch', () => {
  it('should set loading true initially and then set data on success', async () => {
    const fetcher = vi.fn().mockResolvedValue('result');
    const { result } = renderHook(() => useFetch(fetcher));
    expect(result.current.loading).toBe(true);
    await act(async () => {
      await flushPromises();
    });
    expect(result.current.data).toBe('result');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should set error on fetch failure', async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error('fail'));
    const { result } = renderHook(() => useFetch(fetcher));
    await act(async () => {
      await flushPromises();
    });
    expect(result.current.error).toBe('Request failed');
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
  });
});
