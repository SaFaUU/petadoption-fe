import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        data: credentials,
      }),
    }),
    updateProfile: builder.mutation({
      query: (credentials) => ({
        url: "/profile",
        method: "PUT",
        data: credentials,
      }),
      invalidatesTags: [tagTypes.profile],
    }),
    changePassword: builder.mutation({
      query: (credentials) => {
        return {
          url: "/change-password",
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          data: credentials,
        };
      },
    }),
    getProfile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLoginMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = userApi;
