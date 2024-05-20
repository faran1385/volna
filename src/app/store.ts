import {  configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "./Player/Player.ts";
export const store = configureStore({
    reducer:{
        player :  PlayerSlice
    }
})  
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>