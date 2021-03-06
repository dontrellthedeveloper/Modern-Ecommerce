import React from 'react';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree
    // homeObjFour
} from './Data';
import { InfoSection } from '../components/Utils';


// import Cards from "../components/cards/cards.component";
// import Slider from '../components/slider/slides.component';
// import HomepageSlider from '../components/homepageslider/homepageslider.component';

import {Jumbotron} from '../components/jumbotron/jumbotron.component';
import HomePage from '../components/homepage/homepage.component';
import ReactVideoPlayer from '../components/videoplayer/videoplayer.component';
import Services from '../components/servicessection/services.component';
import MainSlider from '../components/mainslider/mainslider.component';
import ProductBanner from '../components/productbanner/productbanner.component';
import ProductBanner2 from '../components/productbanner2/productbanner2.component';

const HomeSection = () => {
    return (
        <>

        <MainSlider/>

        
        <HomePage/>
        {/*
        <ReactVideoPlayer/>
        */}
        <Services/>

        <ProductBanner2/>
        <Jumbotron/>
        <InfoSection {...homeObjThree}/>
        <ProductBanner/>
        <ReactVideoPlayer/>
        {/*
        <InfoSection {...homeObjOne}/>
        <Slider/>
        */}
        <InfoSection {...homeObjTwo}/>


        </>
    )
}

export default HomeSection;





