import {createSlice} from "@reduxjs/toolkit";
import {
    playerInitialState,
    SET_CURRENT_INDEX_ACTION_TYPE,
    SET_PLAYER_ACTION_TYPE,
    SET_PLAYING_ACTION_TYPE, SET_PLAYLIST_ACTION_TYPE
} from "./PlayerSliceType.ts";


const initialState: playerInitialState = {
    playlist: [{
        img: "https://volna.volkovdesign.com/img/covers/cover.svg",
        href: "http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3",
        name: "Epic Cinematic",
        singer: "AudioPizza"
    }],
    isPlaying: false,
    currentIndex: 0
}
const PlayerSlice = createSlice({
    name: "player",
    initialState: initialState,
    reducers: {
        SET_PLAYER: (state, action: SET_PLAYER_ACTION_TYPE) => {
            state.playlist.push(action.payload)
            state.currentIndex = state.playlist.length - 1
        },
        SET_PLAYING: (state, action: SET_PLAYING_ACTION_TYPE) => {
            state.isPlaying = action.payload;
        },
        SET_PLAYLIST: (state, action: SET_PLAYLIST_ACTION_TYPE) => {
            state.playlist = action.payload
        },
        SET_CURRENT_INDEX: (state, action: SET_CURRENT_INDEX_ACTION_TYPE) => {
            const nextSongIndex = state.currentIndex + action.payload;
            if (nextSongIndex >= state.playlist.length) {
                state.currentIndex = 0
            } else if (nextSongIndex < 0) {
                state.currentIndex = state.playlist.length - 1
            } else {
                state.currentIndex += action.payload
            }
            state.isPlaying = true
        }
    }
})

export const {SET_PLAYER, SET_PLAYLIST, SET_PLAYING, SET_CURRENT_INDEX} = PlayerSlice.actions
export default PlayerSlice.reducer