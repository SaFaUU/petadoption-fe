import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const adoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitAdoptionRequest: build.mutation({
      query: (data) => ({
        url: "/adoption-requests",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),
    getAllAdoptionRequests: build.query({
      query: (params) => ({
        url: "/adoption-requests",
        method: "GET",
        params: params,
      }),
      providesTags: [tagTypes.adoptionRequest],
    }),
    changeAdoptionStatus: build.mutation({
      query: (data) => ({
        url: `/adoption-requests/${data.id}`,
        method: "PUT",
        data: data.data,
      }),
      invalidatesTags: [tagTypes.adoptionRequest],
    }),
    myAdoptionRequest: build.query({
      query: (params) => ({
        url: `/my-adoption-requests`,
        method: "GET",
        params: params,
      }),
      providesTags: [tagTypes.adoptionRequest],
    }),
  }),
});

export const {
  useSubmitAdoptionRequestMutation,
  useGetAllAdoptionRequestsQuery,
  useChangeAdoptionStatusMutation,
  useMyAdoptionRequestQuery,
} = adoptionRequestApi;
