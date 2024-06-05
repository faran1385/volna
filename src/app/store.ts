import {configureStore} from "@reduxjs/toolkit";
import PlayerSlice from "./Player/Player.ts";
import {NotificationModalSlice} from "./Profile/NotificationModal/NotificationModal.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        player: PlayerSlice,
        [NotificationModalSlice.name]: NotificationModalSlice.reducer
    }
})
type AppDispatch = typeof store.dispatch

type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector