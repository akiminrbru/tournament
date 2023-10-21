import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dev.darksecrets.ru/api/auth/'}),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (user) => ({
                url: 'signup',
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        loginUser: build.mutation({
            query: (user) => ({
                url: 'signin',
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            transformResponse: (response) => {
                console.log(response)
                // localStorage.setItem('token', response.jwt)
            }
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = usersApi;