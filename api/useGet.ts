import { useEffect, useState } from 'react';
import api from './client';

export type UseApiHookData<T> =
  | { data: T; error: null; isLoading: false }
  | { data: null; error: null; isLoading: boolean }
  | { data: null; error: { message: string; status: number }; isLoading: false };

type UseGetResponse<T> = UseApiHookData<T> & {
  refetch: () => void;
};

export default function useGet<T = unknown>(
  path: string,
  params?: Record<string, unknown>,
): UseGetResponse<T> {
  const [hasInitialFetched, setHasInitialFetched] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [data, setData] = useState<UseApiHookData<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    if (hasInitialFetched && !shouldRefetch) return;

    setData({ error: null, data: null, isLoading: true });

    api
      .get(path, { params })
      .then((data) => {
        setData({ isLoading: false, data: data as T, error: null });
      })
      .catch((e) => {
        setData({
          data: null,
          error: {
            message: e.response.data,
            status: e.response.status,
          },
          isLoading: false,
        });
      })
      .finally(() => {
        if (!hasInitialFetched) setHasInitialFetched(true);
        setShouldRefetch(false);
      });
  }, [shouldRefetch, hasInitialFetched, params, path]);

  function refetch() {
    setShouldRefetch(true);
  }

  return { ...data, refetch };
}
