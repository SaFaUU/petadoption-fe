import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPets: build.query({
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
      providesTags: [tagTypes.pets],
    }),
    addPet: build.mutation({
      query: (pet) => ({
        url: "/pets",
        method: "POST",
        data: pet,
      }),
      invalidatesTags: [tagTypes.pets],
    }),
    deletePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pets],
    }),
  }),
});

export const { useGetAllPetsQuery, useAddPetMutation, useDeletePetMutation } =
  petApi;
