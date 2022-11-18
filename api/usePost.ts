import { useState } from 'react';
import api from './client';

interface PostParams {
  payload: { [k: string]: unknown } | { [k: string]: unknown }[];
}

export interface UsePostReturn<P extends PostParams, T> {
  post: (params: P) => Promise<T>;
  isSubmitting: boolean;
}

export default function usePost<P extends PostParams, T = unknown>(
  url: string,
): UsePostReturn<P, T> {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function callApi(params: P): Promise<T> {
    setIsSubmitting(true);

    const res = await api.post(url, params.payload);

    setIsSubmitting(false);

    return res as T;
  }

  return { post: callApi, isSubmitting };
}
