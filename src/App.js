import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



import {Navbar, Footer} from "./components/Utils";
import GlobalStyle from './globalStyles';
import HomeSection from './pages/HomeSection';
import ScrollToTop from './components/Utils/ScrollToTop';


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

                </Switch>
                <Footer/>
                </Router>
            </React.Fragment>
        );
    }

}

export default App;
