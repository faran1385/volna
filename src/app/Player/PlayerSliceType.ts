export type playerInitialState = {
    playlist: song[],
    isPlaying: boolean,
    currentIndex: number
}


type song = {
    img: string,
    href: string,
    singer: string,
    name: string
}


export type SET_PLAYER_ACTION_TYPE = {
    payload: song
}

export type SET_PLAYING_ACTION_TYPE = {
    payload: boolean
}

export type SET_CURRENT_INDEX_ACTION_TYPE = {
    payload: 1 | -1
}

export type SET_PLAYLIST_ACTION_TYPE = {
    payload: song[]
}