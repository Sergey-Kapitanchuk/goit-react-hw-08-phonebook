import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://630be24183986f74a7b7c466.mockapi.io',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts'],
        }),
        addContacts: builder.mutation({
            query: newContact => ({
                url: '/contacts',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContacts: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const { useFetchContactsQuery, useDeleteContactsMutation, useAddContactsMutation, } = contactsApi;