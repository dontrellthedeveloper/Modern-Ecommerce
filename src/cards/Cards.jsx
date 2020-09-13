import React, {Component} from 'react';
import Card from './cardui';

import modernImg from '../assets/modern-card-1.jpg';
import modernImg2 from '../assets/modern-card-2.jpg';
import modernImg3 from '../assets/modern-card-3.jpg';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={modernImg} title="Console"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={modernImg2} title="Playground"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={modernImg3} title="Adventure"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;