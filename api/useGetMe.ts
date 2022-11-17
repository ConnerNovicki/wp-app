import useGet from './useGet';

type UseGetMeReturn = {
  user: unknown;
}

export default function useGetMe() {
  return useGet<UseGetMeReturn>('/api/users/me');
}