import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IGStory = {
  id: number;
  account: string;
  avatar: string;
};

type IGPost = {
  id: number;
  like: number;
  comment: number;
  description: string;
  account: string;
  createtime: string;
  image: string;
  avatar: string;
};

type IGChat = {
  id: number;
  message: string;
  avatar: string;
  name: string;
  flag: boolean;
  time: string;
};
export const homeApi = createApi({
  reducerPath: "homeApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://react-instagram-sk39.onrender.com",
  }),
  endpoints: (builder) => ({
    getIGPosts: builder.query<IGPost[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `posts/${id}`;
        }
        return "posts";
      },
    }),
    getIGStoies: builder.query<IGStory[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `stories/${id}`;
        }
        return "stories";
      },
    }),
    getIGChats: builder.query<IGChat[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `chats/${id}`;
        }
        return "chats";
      },
    }),
  }),
});

export const { useGetIGStoiesQuery, useGetIGPostsQuery, useGetIGChatsQuery } =
  homeApi;
