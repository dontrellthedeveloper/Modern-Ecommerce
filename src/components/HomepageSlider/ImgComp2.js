import React from 'react';

function ImgComp2({src}) {
    let imgStyles={
        width: 100+"%",
        height:"a"
    };
    return <img src={src} alt="slide-img" style={imgStyles}>

    </img>
}

export default ImgComp2;