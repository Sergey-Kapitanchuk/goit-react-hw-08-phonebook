import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userFetch = createApi({
    reducerPath: 'userFetch',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),

    tagTypes: ['User'],
    endpoints: builder => ({
        getUser: builder.query({
            query: () => '/users/current',
        }),
        singUp: builder.mutation({
            query: newUser => ({
                url: '/users/signup',
                method: 'POST',
                body: newUser,

            }),
            invalidatesTags: ['User'],
        }),
        login: builder.mutation({
            query: newLogin => ({
                url: '/users/login',
                method: 'POST',
                body: newLogin,
            }),
            invalidatesTags: ['User'],
        }),
        logOut: builder.mutation({
            query: () => ({
                url: '/users/logout',
                method: 'POST',
            }),
        })
    }),
});


export const { useGetUserQuery, useSingUpMutation, useLoginMutation, useLogOutMutation } = userFetch;