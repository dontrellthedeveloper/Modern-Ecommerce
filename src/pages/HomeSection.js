import React from 'react';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour
} from './Data';
import { InfoSection } from '../components/Utils';

import {Jumbotron} from '../components/jumbotron/jumbotron.component';
import Cards from "../components/cards/cards.component";
import HomePage from '../components/homepage/homepage.component';
import ReactVideoPlayer from '../components/videoplayer/videoplayer.component';
import Slider from '../components/slider/slides.component';
import Services from '../components/servicessection/services.component';
import HomepageSlider from '../components/homepageslider/homepageslider.component';
import MainSlider from '../components/mainslider/mainslider.component';
import ProductBanner from '../components/productbanner/productbanner.component';
import ProductBanner2 from '../components/productbanner2/productbanner2.component';

const HomeSection = () => {
    return (
        <>

        <MainSlider/>

        
        <HomePage/>

        <ReactVideoPlayer/>
        <Services/>
        <ProductBanner/>
        <Jumbotron/>
        <InfoSection {...homeObjThree}/>
        <ProductBanner2/>
        <InfoSection {...homeObjOne}/>
        {/*
        <Slider/>
        */}
        <InfoSection {...homeObjTwo}/>


        </>
    )
}

export default HomeSection;





