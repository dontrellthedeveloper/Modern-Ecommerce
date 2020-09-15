import React, {useState} from 'react';
import ImgComp2 from "./ImgComp2";
import i1 from "../../assets/modern-i2.jpg";
import i2 from "../../assets/modern-i6.jpg";
import i3 from "../../assets/modern-i3.jpg";
import i4 from "../../assets/modern-i4.jpg";
import i5 from "../../assets/modern-i5.jpg";

import './homepageslider.styles.scss'

function HomepageSlider() {
    let sliderArr = [
        <ImgComp2 src={i1}/>,
        <ImgComp2 src={i2}/>,
        <ImgComp2 src={i3}/>,
        <ImgComp2 src={i4}/>,
        <ImgComp2 src={i5}/>
        ];
    const [x, setX] = useState(0);
    const goLeft = () => {

        x ===  0 ? setX(-100*(sliderArr.length-1)) : setX(x+100);
    };

    const goRight = () => {

     (x ===  -100*(sliderArr.length-1))?setX(0) : setX(x-100);
    };

    

    return <div className='slider2'>
        {
            sliderArr.map((item, index) => {
                return(
                    <div key={index} className="slide2" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })
            
        }
        setTimeout(goRight, 8000);
        <button id="goLeft2" onClick={goLeft}>
            <i className="fas fa-chevron-left"></i>
        </button>
        <button id="goRight2" onClick={goRight}>
            <i className="fas fa-chevron-right"></i>
        </button>
         </div>
         
}

export default HomepageSlider;