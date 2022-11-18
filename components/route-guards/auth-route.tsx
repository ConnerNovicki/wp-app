'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useGetMe from '../../api/useGetMe';

export default function AuthRoute({ children }: { children: React.ReactNode }) {
  const { data, isLoading, error } = useGetMe();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.push('/login');
    }
    if (!isLoading && !!data && !data.user) {
      router.push('/login');
    }
  }, [data, error, isLoading, router])

  if (isLoading || !data) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

  return <>{children}</>
}