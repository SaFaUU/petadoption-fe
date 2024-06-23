import { baseApi } from "./baseApi";

export const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPets: build.query({
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
    }),
    addPet: build.mutation({
      query: (pet) => ({
        url: "/pets",
        method: "POST",
        data: pet,
      }),
    }),
  }),
});

export const { useGetAllPetsQuery, useAddPetMutation } = petApi;
