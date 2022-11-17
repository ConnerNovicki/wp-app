import type { UsePostReturn } from './usePost';
import usePost from './usePost';

interface UsePostRegisterParams {
  payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };
}

type UsePostRegisterReturn = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  sessionId: string;
};

export default function usePostLogin(): UsePostReturn<UsePostRegisterParams, UsePostRegisterReturn> {
  const { post, isSubmitting } = usePost<UsePostRegisterParams, UsePostRegisterReturn>('/api/auth/register');

  const modifiedPost = (params: UsePostRegisterParams) => post(params).then((res) => {
    localStorage.setItem('sid', res.sessionId)
    return res
  })

  return {
    post: modifiedPost,
    isSubmitting
  }
}
