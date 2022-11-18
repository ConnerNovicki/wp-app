import usePost from './usePost';

type UsePostLogoutParams = {
  payload: Record<string, never>
}

type UsePostLogoutReturn = Record<string, never>

export default function usePostLogout() {
  return usePost<UsePostLogoutParams, UsePostLogoutReturn>('/api/auth/logout');
}