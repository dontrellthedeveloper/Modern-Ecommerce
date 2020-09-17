import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory4.styles.scss';

class Directory4 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women hats',
                    imageUrl: 'https://i.ibb.co/nrfghYg/women-hats-front-2-Cropped.jpg',
                    id: 10,
                    linkUrl: 'shop/women-hats',
                    size: 'large'
                },
                {
                    title: 'belts',
                    imageUrl: 'https://i.ibb.co/LhmPbJL/belts-front-2-Cropped.jpg',
                    id: 12,
                    linkUrl: 'shop/belts',
                    size: 'large'
                },
                {
                    title: 'women bags',
                    imageUrl: 'https://i.ibb.co/r2xP9PC/women-bags-front-2-Cropped.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/women-bags'
                },
                {
                    title: 'shades',
                    imageUrl: 'https://i.ibb.co/BygVHKq/women-shades-front-2-Cropped.jpg',
                    id: 19,
                    linkUrl: 'shop/shades'
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps} />      
                ))}
            </div>
        );
    }
}

export default Directory4;