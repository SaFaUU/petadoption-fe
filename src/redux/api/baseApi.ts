// Need to use the React-specific entry point to import createApi
import { env } from "@/config";
import axiosBaseQuery from "@/helpers/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: env.server_url as string }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList,
});
