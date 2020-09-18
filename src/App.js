import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';



import {Navbar, Footer} from "./components/Utils";
import GlobalStyle from './globalStyles';
import HomeSection from './pages/HomeSection';
import ScrollToTop from './components/Utils/ScrollToTop';
import ShopPage from './pages/shop/shop.component';
import {createStructuredSelector} from 'reselect';

import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';


class App extends Component {

    constructor() {
        super();
        this.state = {
          currentUser: null
        }
      }
    
      unsubscribeFromAuth = null;
    
      componentDidMount() {
        const {setCurrentUser} = this.props
    
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth)
    
            userRef.onSnapshot(snapShot => {
              setCurrentUser ({
                  id: snapShot.id,
                  ...snapShot.data()
                })
            });
          }
          setCurrentUser(userAuth)
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
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomeSection}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route 
                    exact 
                    path="/signin" 
                    render={() => this.props.currentUser ? (
                      <Redirect to='/' />
                      ) : (
                        <SignInAndSignUp/>
                        )
                      } 
                    />
                </Switch>
                <Footer/>
                </Router>
            </React.Fragment>
        );
    }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
