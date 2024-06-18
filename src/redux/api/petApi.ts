import { baseApi } from "./baseApi";

export const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPets: build.query({
      query: () => ({
        url: "/pets",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPetsQuery } = petApi;
