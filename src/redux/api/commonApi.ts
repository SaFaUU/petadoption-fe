import { env } from "@/config";
import { baseApi } from "./baseApi";

const commonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      queryFn: async (file) => {
        console.log(file);
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${env.imgbb_apiKey}`,
          {
            method: "POST",
            body: file,
          }
        );
        const data = await res.json();
        return { data };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useUploadImageMutation } = commonApi;
