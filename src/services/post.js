import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://jsonplaceholder.typicode.com/' 
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: "/posts"
      })
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`
      })
    }),
    deletePostById: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE'
      })
    }),
    createPost: builder.mutation({
      query: (post) => ({
        url: `posts/`,
        body: post,
        method: 'POST'
      })
    }),
    updatePost: builder.mutation({
      query: (body) => {
        console.log('update post',body);
        const {id, ...data} = body
        console.log('actual post',data);
        return {
          url: 'posts/' + id,
          body: data,   
          method: 'PUT'
        }
      }
    })
  }),
})

export const { useGetAllPostsQuery, useGetPostByIdQuery, useDeletePostByIdMutation, useCreatePostMutation, useUpdatePostMutation} = postApi