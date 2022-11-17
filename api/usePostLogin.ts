import usePost from './usePost';

interface UsePostLoginParams {
  payload: {
    email: string;
    password: string;
  };
}

type UsePostLoginReturn = {
  sessionId: string;
};

export default function usePostLogin() {
  const { isSubmitting, post } = usePost<UsePostLoginParams, UsePostLoginReturn>('/api/auth/login');

  const modifiedPost = (params: UsePostLoginParams) => post(params).then((res) => {
    localStorage.setItem('sid', res.sessionId)
    return res
  })

  return {
    post: modifiedPost,
    isSubmitting
  }
}
