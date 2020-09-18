import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



import {Navbar, Footer} from "./components/Utils";
import GlobalStyle from './globalStyles';
import HomeSection from './pages/HomeSection';
import ScrollToTop from './components/Utils/ScrollToTop';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentUser: null
        }
      }
    
      unsubscribeFromAuth = null;
    
      componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
          this.setState({currentUser: user})
        });
      }
    
      componentWillUnmount() {
        this.unsubscribeFromAuth();
      }

    render() {
        return (
            <React.Fragment>
                <Router>
                <GlobalStyle/>
                <ScrollToTop/>
                <Navbar currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomeSection}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/signin" component={SignInAndSignUp}/>
                </Switch>
                <Footer/>
                </Router>
            </React.Fragment>
        );
    }

}

export default App;
