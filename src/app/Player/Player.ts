import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    img:"",
    href:"",
    name:"",
    singer:"",
    paused:false
}
const PlayerSlice = createSlice({
    name : "player",
    initialState : initialState,
    reducers:{
        setPlayer : (state, action)=>{
            state.name = action.payload.name;
            state.href = action.payload.href;
            state.singer = action.payload.singer;
            state.img = action.payload.img;
        } ,
        setPlaying : (state, action)=>{
            state.paused = action.payload.paused;
        }
    }
})

export const {setPlayer , setPlaying} = PlayerSlice.actions
export default PlayerSlice.reducer