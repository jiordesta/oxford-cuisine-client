import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../axios_instance";

const initialState = {
    user: null,
    loading_login: false,
    loading_user: false
}

export const register = createAsyncThunk('register', async (inputs) => {
    try {
        const {fname, lname, username, password, image} = inputs
        const data = new FormData()
        data.append('fname',fname)
        data.append('lname',lname)
        data.append('username',username)
        data.append('password',password)
        data.append('image',image)
        const res = await AxiosInstance.post('/user/register',data)
        return res.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const fetch_user = createAsyncThunk('fetch_user', async () => {
    try {
        const res = await AxiosInstance.get('/user/fetch_user')
        return res.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})
export const login = createAsyncThunk('login', async (inputs) => {
    try {
        const { username, password } = inputs;
        const res = await AxiosInstance.post('/user/login',{username, password})
        return res.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading_login = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading_login = false
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading_login = false
        })
        builder.addCase(fetch_user.pending, (state, action) => {

        })
        builder.addCase(fetch_user.rejected, (state, action) => {
            
        })
        builder.addCase(fetch_user.fulfilled, (state, action) => {
            state.user = action.payload.user
        })
    }
})

export default authSlice.reducer