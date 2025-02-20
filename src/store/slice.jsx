import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likeList:[]
}
export const LikeSlice = createSlice({
    name:"likes",
    initialState,
    reducers:{
        saveLikeList:(state,action)=> {

        },
        removeLikeList:(state, action)=> {

        }
    }
})

export const {saveLikeList, removeLikeList} = LikeSlice.actions