import React from 'react';

import CLOTHING_DATA from './shop.data';

import './shop.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: CLOTHING_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (<div className="shoppage-css">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
            </div>);
    }
}

export default ShopPage;