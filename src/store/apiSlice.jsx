import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://music-marketplace.vercel.app/api",
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
    // getall producers
    getProducers: builder.query({
      query: () => "/user/producers",
      providesTags: ["Producers"],
    }),
    getBeatByProducer: builder.query({
      query: () => "/user/producers",
      providesTags: ["Producers"],
    }),
    // Genres
    getGenresList: builder.query({
      query: () => "/genre",
      providesTags: ["Genres"],
    }),

    getGenresWithSongs: builder.query({
      query: (queryString = "") => `/genre/songs${queryString}`,
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
      query: (page = 1) => `/tracks?page=${page}`,
      providesTags: ["Tracks"],
    }),
    streamTrack: builder.query({
      query: (trackId) => ({
        url: `/tracks/stream/${trackId}`,
        method: "GET",
      }),
    }),
    createTrack: builder.mutation({
      query: (trackData) => ({
        url: "/tracks",
        method: "POST",
        body: trackData,
      }),
      invalidatesTags: ["Tracks"],
    }),
    // Packs
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
    getPlaylists: builder.query({
      query: () => "/playlist",
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
  useGetGenresListQuery,
  useGetGenresWithSongsQuery,
  useCreateGenreMutation,
  useGetTracksQuery,
  useStreamTrackQuery,
  useUploadPacksMutation,
  useGetPlaylistsQuery,
  useGetPacksQuery,
  useCreateTrackMutation,
  useGetOrdersQuery,
  useCreateOrderMutation,
  useCheckAuthStatusQuery,
} = apiSlice;
