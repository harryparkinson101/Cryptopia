import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'd4ee27b755mshd9848f2f566cce1p187be1jsne7711d531012',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', cryptoApiHeaders['X-RapidAPI-Key']);
      headers.set('X-RapidAPI-Host', cryptoApiHeaders['X-RapidAPI-Host']);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;