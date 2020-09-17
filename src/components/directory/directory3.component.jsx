import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory3 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'women shoes',
                    imageUrl: 'https://i.ibb.co/BP8bJMz/women-shoes-front-2-Cropped.jpg',
                    id: 1,
                    linkUrl: 'shop/women-shoes',
                    size: "large"
                },
                {
                    title: 'men shoes',
                    imageUrl: 'https://i.ibb.co/Rp02qB3/men-shoes-front-2-Cropped.jpg',
                    id: 2,
                    linkUrl: 'shop/men-shoes',
                    size: "large"
                },
                {
                    title: 'necklaces',
                    imageUrl: 'https://i.ibb.co/p3KymZP/necklaces-front-2-Cropped.jpg',
                    size: 'large',
                    id: 3,
                    linkUrl: 'shop/necklaces',
                }
                //   {
                //     title: 'womens',
                //     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                //     size: 'large',
                //     id: 4,
                //     linkUrl: 'shop/womens'
                //   },
                //   {
                //     title: 'mens',
                //     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                //     size: 'large',
                //     id: 5,
                //     linkUrl: 'shop/mens'
                //   }
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

export default Directory3;