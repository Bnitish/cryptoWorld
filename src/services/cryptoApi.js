import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com/";
const API_KEY = process.env.REACT_APP_API_KEY  
const cryptoApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_COIN_HOST,
  "x-rapidapi-key": API_KEY,
};

const createRequest =(url)=>({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos : builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory : builder.query({
            query:({coinId, timePeriod})=> createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        getCryptoExchanges: builder.query({
            query:()=> createRequest(`/exchanges`)
        })
    })
})

export const { useGetCryptosQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery , useGetCryptoExchangesQuery} = cryptoApi;
