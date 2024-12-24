import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
  }),
  tagTypes: [
    "Tracks",
    "Genres",
    "Packs",
    "Orders",
    "Users",
    "Profile",
    "Producers",
  ],
  endpoints: (builder) => ({
    // Authentication
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    checkAuthStatus: builder.query({
      query: () => "/auth/check-status",
    }),
    getUserProfile: builder.query({
      query: () => "/me",
      providesTags: ["Profile"],
    }),
    updateUserProfile: builder.mutation({
      query: (updatedData) => ({
        url: "/me",
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["Profile"],
    }),
    //getall producers
    getProducers: builder.query({
      query: () => "/user/producers",
      providesTags: ["Producers"],
    }),
    getBeatByProducer: builder.query({
      query: () => "/user/producers",
      providesTags: ["Producers"],
    }),
    // Genres
    getGenres: builder.query({
      query: () => "/genre",
      providesTags: ["Genres"],
    }),
    createGenre: builder.mutation({
      query: (newGenre) => ({
        url: "/genre",
        method: "POST",
        body: newGenre,
      }),
      invalidatesTags: ["Genres"],
    }),

    // Tracks
    getTracks: builder.query({
      query: () => "/tracks",
      providesTags: ["Tracks"],
    }),
    createTrack: builder.mutation({
      query: (trackData) => ({
        url: "/tracks",
        method: "POST",
        body: trackData,
      }),
      invalidatesTags: ["Tracks"],
    }),
    //Packs
    getPacks: builder.query({
      query: () => "/packs",
      providesTags: ["Packs"],
    }),

    uploadPacks: builder.mutation({
      query: (packData) => ({
        url: "/packs/upload-packs",
        method: "POST",
        body: packData,
      }),
    }),
    // Orders
    getOrders: builder.query({
      query: () => "/order/orders",
      providesTags: ["Orders"],
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/order/beat",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useGetProducersQuery,
  useGetBeatByProducerQuery,
  useGetGenresQuery,
  useCreateGenreMutation,
  useGetTracksQuery,
  useGetPacksQuery,
  useCreateTrackMutation,
  useGetOrdersQuery,
  useCreateOrderMutation,
  useCheckAuthStatusQuery,
} = apiSlice;
