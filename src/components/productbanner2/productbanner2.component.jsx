import React from 'react';
import {Container} from 'react-bootstrap';

import './productbanner2.styles.scss';
import Directory4 from '../../components/directory/directory4.component';


const ProductBanner = () => (
    <Container>
        <div className="homepage2">
           <Directory4/>
        </div>
    </Container>
);

export default ProductBanner;