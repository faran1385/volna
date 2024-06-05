import {createSlice} from "@reduxjs/toolkit";
import {notificationType} from "../../../components/ui/Tabs/NotificationModal/NotificationModal.tsx";

type initialState = {
    notification: notificationType
}


const initialState: initialState = {
    notification: {
        texts: [],
        subtitles: [],
        title: "",
        type: 'info'
    }
}

export const NotificationModalSlice = createSlice({
    reducers: {
        SET_NOTIFICATION: (state, action: { payload: notificationType }) => {
            state.notification = action.payload
        }
    },
    name: "notification",
    initialState
})

export const {SET_NOTIFICATION} = NotificationModalSlice.actions

export default NotificationModalSlice