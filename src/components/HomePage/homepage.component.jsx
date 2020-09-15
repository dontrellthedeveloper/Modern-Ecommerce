import React from 'react';
import {Container} from 'react-bootstrap';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import Directory2 from '../../components/directory/directory2.component';

const HomePage = () => (
    <Container>
        <div className="homepage">
           <Directory/>
            <Directory2/>
        </div>
    </Container>
);

export default HomePage;