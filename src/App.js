import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';

import {Navbar} from "./components";
import {Jumbotron} from './components/Jumbotron';
import Cards from "./cards/Cards";
import HomePage from './components/homepage.component';
import ReactVideoPlayer from './components/video-player.component';
import Slider from './components/Slider';
import GlobalStyle from './globalStyles';
import Services from './components/Services';
import './App.css';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                <GlobalStyle/>
                <Navbar/>
                <Slider/>
                <Services/>
                <ReactVideoPlayer/>
                <HomePage/>
                <Jumbotron/>
                <Cards/>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path='/contact' component={Contact}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Layout>
                </Router>
            </React.Fragment>
        );
    }

}

export default App;
