// this is the parent of slices
// usually we use createSlice from redux , but here because we deals with endpoints in slices that deals with asynchronous requests
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Products", "Order", "User"],
  endpoints: (builder) => ({}),
});
