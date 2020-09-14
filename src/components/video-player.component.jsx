import React from 'react';
import ReactPlayer from "react-player";

import './video-player.styles.scss';




const ReactVideoPlayer = () => (
    <div className='react-player-section'>
        <div className='player-head-main'>
            <h1 className="player-heading">Services</h1>
            <p className="player-subheading">We offer many awesome and secured services and some of them are here:</p>
        </div>
        <div className='react-player-2'>
            <ReactPlayer width='960px' height='540px' url='https://www.youtube.com/watch?v=3daHP2JD-4U' controls />
        </div>
    </div>

);

export default ReactVideoPlayer;