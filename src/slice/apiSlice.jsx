import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `./src/data/`,
  }),
  tagTypes: ['Todos'],
  
  endpoints: (builder) => ({
    getCandidateJson: builder.query({
      query: () => "第15任總統副總統選舉.json", 
    }),
    getRateJson: builder.query({
      query: () => "2020candidate.json", 
    }),
  }),
});

export const { 
  useGetCandidateJsonQuery,
  useGetRateJsonQuery,
} = postsApi;