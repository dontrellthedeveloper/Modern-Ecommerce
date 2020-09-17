import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory2.styles.scss';

class Directory2 extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu-2">
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />      
                ))}
            </div>
        );
    }
}

export default Directory2;