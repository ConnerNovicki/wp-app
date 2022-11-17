'use client';

import { useEffect } from 'react';
import useGetMe from '../../api/useGetMe';

export default function AuthRoute({ children }: { children: React.ReactNode }) {
  const { data, isLoading, error } = useGetMe();

  useEffect(() => {
    if (data?.user) {
      console.log('DATA:', data.user)
    }
  }, [data])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

  return <>{children}</>
}