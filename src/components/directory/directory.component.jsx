import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                  {
                    title: 'business dresses',
                    imageUrl: 'https://i.ibb.co/RvJZL1R/women-business-dress-front-2-Cropped.jpg',

                    id: 1,
                    linkUrl: 'shop/business-dresses'
                },
                {
                    title: 'summer dresses',
                    imageUrl: 'https://i.ibb.co/98dY9jJ/women-summer-dress-front-2-Cropped.jpg',

                    id: 2,
                    linkUrl: 'shop/summer-dresses'
                },
                {
                    title: 'women purses',
                    imageUrl: 'https://i.ibb.co/pwQzWj5/women-purses-front-2-Cropped.jpg',
                    id: 3,
                    linkUrl: 'shop/women-purses'
                },
                  {
                    title: 'all women',
                    imageUrl: 'https://i.ibb.co/R9Xqk6S/women-all-front.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/all-women'
                  },
                  {
                    title: 'all men',
                    imageUrl: 'https://i.ibb.co/YPkjs4v/men-all-products-front-Cropped.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/all-men'
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

export default Directory;