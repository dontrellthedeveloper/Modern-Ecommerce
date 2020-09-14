import React from 'react';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour
} from './Data';
import { InfoSection } from '../components';

const HomeSection = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default HomeSection;





