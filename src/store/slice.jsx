import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likeList: JSON.parse(localStorage.getItem('savedLikes')) || []
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
            return {
                likeList:[...state.likeList, action.payload]
            }
        }
    }
})

export const {saveLikeList, removeLikeList} = LikeSlice.actions