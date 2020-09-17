import React from 'react';
import {Container} from 'react-bootstrap';

import './productbanner.styles.scss';
import Directory3 from '../../components/directory/directory3.component';


const ProductBanner = () => (
    <Container>
        <div className="homepage2">
           <Directory3/>
        </div>
    </Container>
);

export default ProductBanner;