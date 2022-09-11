import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: true },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        }
    }
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer