import React from 'react';

import './card-style.styles.scss';

const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} className="card-img-top" alt="Image-1"/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis consequatur consequuntur culpa dolore earum facilis ipsa itaque, nisi, officiis sint sunt tenetur totam? Architecto est inventore perferendis quos vero?
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    )
};

export default Card;