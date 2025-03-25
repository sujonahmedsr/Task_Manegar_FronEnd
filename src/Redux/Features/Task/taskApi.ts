import { baseApi } from "@/Redux/Api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allTask: builder.query({
            query: (priority = "all") => ({
                url: `/user/tasks?priority=${priority}`,
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
        updateTask: builder.mutation({
            query: ({ _id, updateData }) => (
                console.log(_id, updateData),
                
                {
                url: `/user/tasks/${_id}`,
                method: "PATCH",
                body: updateData
            }),
            invalidatesTags: ['task']
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/user/tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['task']
        })
    })
})

export const {
    useAllTaskQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useUpdateTaskMutation
} = authApi