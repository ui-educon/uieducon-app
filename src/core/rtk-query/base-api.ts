import firebaseAuth from "@/firebase.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const basePath = process.env.NEXT_PUBLIC_DASHBOARD_API_URL;

const getAuthToken = async () => {
  const currentUser = firebaseAuth?.currentUser;
  if (currentUser) {
    return await currentUser?.getIdToken();
  } else {
    return "";
  }
};

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: basePath,
    prepareHeaders: async (headers) => {
      headers.set("Authorization", await getAuthToken());
      return headers;
    },
  }),
  endpoints: () => ({}),
});
