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
import Adm from './components/Admin/Admin';

import './styles/styles.scss';


render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signout" component={SignOut}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/emergency" component={Emergency}/>
        <Route exact path="/adm" component={Adm}/>
         <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
