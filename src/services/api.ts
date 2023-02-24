import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getBaseQueryParams: Object = {
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers: Headers): MaybePromise<Headers | void> => {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    return headers
  },
  credentials: 'omit'
};

export const validateReponse = (response: Response) => {
  if (response && response.status === 401) {
    window.location.href = '/login';
    return false;
  }
  return true;
};

const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Cryptos'],
  baseQuery: fetchBaseQuery(getBaseQueryParams),
  endpoints: () => ({ })
});

export default api;
