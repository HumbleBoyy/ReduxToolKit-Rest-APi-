import { configureStore } from "@reduxjs/toolkit";
import { LikeSlice } from "./slice";

export const store = configureStore({
    reducer:LikeSlice.reducer
})