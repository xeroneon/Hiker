import React from 'react';
import { render } from 'react-dom';

import {
  getFromStorage,
  setInStorage
} from "../app/utils/storage";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import Emergency from './components/Emergency/Emergency';
import Account from './components/Account/Account';
import Checkout from './components/Checkout/Checkout';

import './styles/styles.scss';


render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signout" component={SignOut}/>
        <Route path="/account" component={Account}/>
        <Route path="/home" component={Home}/>
        <Route path="/emergency" component={Emergency}/>
        <Route path="/checkout" component={Checkout}/>
         <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
