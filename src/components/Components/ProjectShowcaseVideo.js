import * as React from 'react';
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'

function curVideoPlayer()
{
    var mp = new MuiPlayer({
        container:'#mui-player',
        title:'Title',
        src:'../Static/Trailer.mp4',
    })
    return mp;
}

export default function ProjectShowcaseVideo() {
    return (
        <div id="mui-player">
            { curVideoPlayer() }
        </div>
    );
}