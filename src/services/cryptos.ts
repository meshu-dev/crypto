import api, { validateReponse } from './api';

export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: number;
  image: string;
}

export const cryptosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTopTen: build.query<Crypto[], void>({
      query() {
        return {
          url: `/coins/top-ten`,
          validateStatus: validateReponse
        }
      },
      providesTags: [{ type: 'Cryptos', id: 'TOP-TEN' }],
      transformResponse: (response: any) => response
    })
  })
});

export const {
  useGetTopTenQuery
} = cryptosApi;
