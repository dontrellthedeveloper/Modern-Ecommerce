import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';


import {Navbar, Footer} from "./components";
import {Jumbotron} from './components/Jumbotron';
import Cards from "./cards/Cards";
import HomePage from './components/homepage.component';
import ReactVideoPlayer from './components/video-player.component';
import Slider from './components/Slider';
import Services from './components/Services';
import GlobalStyle from './globalStyles';
import HomeSection from './pages/HomeSection';
import './App.css';
import ScrollToTop from './components/ScrollToTop';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                <GlobalStyle/>
                <ScrollToTop/>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomeSection}/>
                    <Route path="/about" component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Footer/>
                </Router>
            </React.Fragment>
        );
    }

}

export default App;
