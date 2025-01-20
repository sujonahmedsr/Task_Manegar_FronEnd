import { createSlice } from "@reduxjs/toolkit";

type Tuser = {
    _id: string
    email: string
}

type TInitalState = {
    token: null | string,
    user: null | Tuser
}

const initialState: TInitalState = {
    token: null,
    user: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {token, user} = action.payload
            state.token = token
            state.user = user
        }
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer