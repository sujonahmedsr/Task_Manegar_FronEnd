import { baseApi } from "@/Redux/Api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allTask: builder.query({
            query: () => ({
                url: `/user/tasks`,
                method: "GET",
            }),
            providesTags: ['task']
        }),
        addTask: builder.mutation({
            query: (data) => ({
                url: `/user/create-task`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['task']
        }),
    })
})

export const { 
    useAllTaskQuery,
    useAddTaskMutation
     } = authApi