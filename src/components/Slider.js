import React, {useState} from 'react';
import ImgComp from "./ImgComp";
import i1 from "../assets/modern-i6.jpg";
import i2 from "../assets/modern-i2.jpg";
import i3 from "../assets/modern-i7.jpg";
import i4 from "../assets/modern-i4.jpg";
import i5 from "../assets/modern-i5.jpg";

import './slider.styles.scss'

function Slider() {
    let sliderArr = [
        <ImgComp src={i1}/>,
        <ImgComp src={i2}/>,
        <ImgComp src={i3}/>,
        <ImgComp src={i4}/>,
        <ImgComp src={i5}/>
        ];
    const [x, setX] = useState(0);
    const goLeft = () => {

        x ===  0 ? setX(-100*(sliderArr.length-1)) : setX(x+100);
    };

    const goRight = () => {

        (x ===  -100*(sliderArr.length-1))?setX(0) : setX(x-100);
    };

    setTimeout(goRight, 8000);

    return <div className='slider'>
        {
            sliderArr.map((item, index) => {
                return(
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })
        }
        <button id="goLeft" onClick={goLeft}>
            <i className="fas fa-chevron-left"></i>
        </button>
        <button id="goRight" onClick={goRight}>
            <i className="fas fa-chevron-right"></i>
        </button>
         </div>
}

export default Slider;