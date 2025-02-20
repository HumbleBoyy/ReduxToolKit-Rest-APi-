import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likeList:[]
}
export const LikeSlice = createSlice({
    name:"likes",
    initialState,
    reducers:{
        saveLikeList:(state,action)=> {
            return{
                likeList:[...state.likeList, action.payload]
            }
        },
        removeLikeList:(state, action)=> {

        }
    }
})

export const {saveLikeList, removeLikeList} = LikeSlice.actions