import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPets: build.query({
      query: (query) => ({
        url: "/pets",
        method: "GET",
        params: query,
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
    updatePet: build.mutation({
      query: (pet) => ({
        url: `/pets/${pet.id}`,
        method: "PUT",
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

export const {
  useGetAllPetsQuery,
  useAddPetMutation,
  useUpdatePetMutation,
  useDeletePetMutation,
} = petApi;
