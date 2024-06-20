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
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),
    changeRole: builder.mutation({
      query: (credentials) => {
        return {
          url: "/change-role",
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          data: credentials,
        };
      },
    }),
    changeStatus: builder.mutation({
      query: (credentials) => {
        return {
          url: "/change-status",
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          data: credentials,
        };
      },
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLoginMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetAllUsersQuery,
  useChangeRoleMutation,
  useChangeStatusMutation,
} = userApi;
