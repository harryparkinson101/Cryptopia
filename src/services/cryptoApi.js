import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'd4ee27b755mshd9848f2f566cce1p187be1jsne7711d531012',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', cryptoApiHeaders['X-RapidAPI-Key']);
      headers.set('X-RapidAPI-Host', cryptoApiHeaders['X-RapidAPI-Host']);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi;