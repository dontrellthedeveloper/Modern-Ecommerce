import React from 'react';
import ReactPlayer from "react-player";

import './video-player.styles.scss';




const ReactVideoPlayer = () => (
    <div className='react-player-2'>
        <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=rH9jM-8hAD8' controls/>
    </div>
);

export default ReactVideoPlayer;