import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



import {Navbar, Footer} from "./components/Utils";
import GlobalStyle from './globalStyles';
import HomeSection from './pages/HomeSection';
import ScrollToTop from './components/Utils/ScrollToTop';
import ShopPage from './pages/shop/shop.component';


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
                    <Route path="/" component={ShopPage}/>
                </Switch>
                <Footer/>
                </Router>
            </React.Fragment>
        );
    }

}

export default App;
