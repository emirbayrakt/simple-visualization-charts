import { useEffect, useState } from 'react';
import { fetchOverview, OverviewResponse } from '../api/overview';

const useOverview = () => {
  const [data, setData] = useState<OverviewResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const result = await fetchOverview();
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError('Failed to fetch overview data');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    // This prevents memory leaks and state updates after component unmount, I didn't want to use AbortController here as it is not supported in all browsers and the fetch function is already handling errors.
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error, refetch: () => setLoading(true) };
};

export default useOverview;
