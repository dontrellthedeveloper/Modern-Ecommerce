import React, {useState} from 'react';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour
} from '../../pages/Data';
import  InfoSection  from '../infosection/infosection.component';
// import i1 from "../../assets/modern-i2.jpg";
// import i2 from "../../assets/modern-i6.jpg";
// import i3 from "../../assets/modern-i3.jpg";
// import i4 from "../../assets/modern-i4.jpg";
// import i5 from "../../assets/modern-i5.jpg";

import './mainslider.styles.scss'

function MainSlider() {
    let sliderArr = [
        <InfoSection {...homeObjTwo}/>,
        <InfoSection {...homeObjThree}/>,
        <InfoSection {...homeObjFour}/>,
        <InfoSection {...homeObjOne}/>
        ];
    const [x, setX] = useState(0);
    const goLeft = () => {

        x ===  0 ? setX(-100*(sliderArr.length-1)) : setX(x+100);
    };

    const goRight = () => {

     (x ===  -100*(sliderArr.length-1))?setX(0) : setX(x-100);
    };

    // setTimeout(goRight, 10000);

    

    return <div className='slider3'>
        {
            sliderArr.map((item, index) => {
                return(
                    <div key={index} className="slide3" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })
            
        }
        
        <button id="goLeft3" onClick={goLeft}>
            <i className="fas fa-chevron-left"></i>
        </button>
        <button id="goRight3" onClick={goRight}>
            <i className="fas fa-chevron-right"></i>
        </button>
         </div>
         
}

export default MainSlider;