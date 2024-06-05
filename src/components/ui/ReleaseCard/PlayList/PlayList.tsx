import React from 'react'
import './PlayList.css'
import {ReleaseCardPlaylistType} from '../ReleaseCard'
import {Song} from "../../Songs/Song/Song.tsx";

export const PlayList: React.FC<ReleaseCardPlaylistType> = ({playlist}) => {
    return (
        <div className='play-list '>
            <ul className='play-list__ul me-2'>
                {
                    playlist.map((song, index) => {
                        return <Song name={song.name} isActive={song.isActive} isPlaying={song.isPlaying}
                                     img={song.srcImg} singer={song.artist}
                                     href={song.herfAudio}
                                     hasPlusAndDownload={true} isLive={0} hasBorder={playlist.length - 1 !== index}
                                     key={index}/>
                    })
                }
            </ul>
        </div>
    )
}
