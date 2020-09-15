import React from 'react';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour
} from './Data';
import { InfoSection } from '../components';

import {Jumbotron} from '../components/Jumbotron';
import Cards from "../cards/Cards";
import HomePage from '../components/homepage.component';
import ReactVideoPlayer from '../components/video-player.component';
import Slider from '../components/Slider';
import Services from '../components/Services';

const HomeSection = () => {
    return (
        <>

        <InfoSection {...homeObjOne}/>
        <Services/>
        <HomePage/>
        
        <ReactVideoPlayer/>

        <Jumbotron/>

        <Slider/>


        <InfoSection {...homeObjThree}/>

        <InfoSection {...homeObjTwo}/>

     













        </>
    )
}

export default HomeSection;





