import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory2.styles.scss';

class Directory2 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'men shirts',
                    imageUrl: 'https://i.ibb.co/xhdp1ww/men-shirt-front-2-Cropped.jpg',
                    id: 6,
                    linkUrl: 'shop/men-shirts'
                },
                {
                    title: 'men vests',
                    imageUrl: 'https://i.ibb.co/Vt6hqTx/men-vest-front-2-Cropped.jpg',
                    id: 7,
                    linkUrl: 'shop/men-vests'
                },
                {
                    title: 'men pants',
                    imageUrl: 'https://i.ibb.co/YN85rgk/men-pants-front-2-Cropped.jpg',
                    id: 8,
                    linkUrl: 'shop/men-pants'
                }
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

export default Directory2;