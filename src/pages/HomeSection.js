import React from 'react';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour
} from './Data';
import { InfoSection } from '../components/Utils';

import {Jumbotron} from '../components/Jumbotron/jumbotron.component';
import Cards from "../components/Cards/cards.component";
import HomePage from '../components/HomePage/homepage.component';
import ReactVideoPlayer from '../components/VideoPlayer/videoplayer.component';
import Slider from '../components/Slider/slides.component';
import Services from '../components/ServicesSection/services.component';
import HomepageSlider from '../components/HomepageSlider/homepageslider.component';

const HomeSection = () => {
    return (
        <>

        <HomepageSlider/>


        <HomePage/>
        
        <ReactVideoPlayer/>
        <Services/>
        <Jumbotron/>
        <InfoSection {...homeObjThree}/>



        <InfoSection {...homeObjTwo}/>






     













        </>
    )
}

export default HomeSection;





