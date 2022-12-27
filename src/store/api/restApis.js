import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseurl = process.env.REACT_APP_BACKEND_BASE_URL;

const restApis = createApi({
  reducerPath: `restApis`,

  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,

    // prepareHeaders: (headers, { getState }) => {
    //   // headers.set(
    //   //   `X-RapidAPI-Key`,
    //   //   `b1fb0c0db0msh6a47f2620baa802p145c4cjsnad4154b3a0b1`
    //   // );

    //   headers.set(baseurl);

    //   return headers;
    // },
  }),
  tagTypes: ["edit", "user"],
  endpoints: (builder) => ({
    //get
    getTeamsSeason: builder.query({
      query: (data) => `${baseurl}/posts/`,
      providesTags: [`user`],
    }),
    //query for get users
    getTodos: builder.query({
      query: (data) => `${baseurl}/todos/1/`,
    }),
    getUsers: builder.query({
      query: (data) => `${baseurl}/users/${data}/`,
    }),
    //post
    addPosts: builder.mutation({
      query: (data) => ({
        url: `${baseurl}/posts/`,
        method: "POST",
        body: data,
      }),
    }),
    //put
    editPosts: builder.mutation({
      query: (data) => ({
        url: `${baseurl}/posts/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["edit"],
    }),
    deletePosts: builder.mutation({
      query: (data) => ({
        url: `${baseurl}/posts/${data}`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["edit"],
    }),
  }),
});

export const {
  useGetTeamsSeasonQuery,
  useGetTodosQuery,
  useGetUsersQuery,
  useAddPostsMutation,
  useEditPostsMutation,
  useDeletePostsMutation,
} = restApis;

export default restApis;
