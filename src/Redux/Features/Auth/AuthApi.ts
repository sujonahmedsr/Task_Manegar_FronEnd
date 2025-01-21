import { baseApi } from "@/Redux/Api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        user: builder.query({
            query: (id) => ({
                url: `/auth/user/${id}`,
                method: "GET",
            })
        }),
        registration: builder.mutation({
            query: (info) => ({
                url: '/auth/user-registraion',
                method: "POST",
                body: info
            })
        }),
        login: builder.mutation({
            query: (info) => ({
                url: '/auth/user-login',
                method: "POST",
                body: info
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/user-logout',
                method: "POST",
            }),
            invalidatesTags: ['task']
        })
    })
})

export const { 
    useRegistrationMutation,
    useLoginMutation, 
    useLogoutMutation, 
    useUserQuery } = authApi