import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export type ApiResponsePayload = unknown;

const client = {
  get: async (path: string, options?: AxiosRequestConfig): Promise<ApiResponsePayload> => {
    return axios
      .get(`${BASE_URL}${path}`, options)
      .then(({ data }: { data: ApiResponsePayload }) => data);
  },
  post: async (
    path: string,
    payload: { [k: string]: unknown } | { [k: string]: unknown }[],
    options?: AxiosRequestConfig,
  ): Promise<ApiResponsePayload> => {
    return axios
      .post(`${BASE_URL}${path}`, payload, options)
      .then(({ data }: { data: ApiResponsePayload }) => data);
  },
};

export default client;
