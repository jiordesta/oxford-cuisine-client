import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../axios_instance";

const initialState = {
    items: [],
    loading_items: false,
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    extraReducers: (builder) => {

    }
})

export default itemSlice.reducer