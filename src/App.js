import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home';
import Startup from './components/Startup';
import Register from './components/Register';
import Login from './components/Login';
import './css/bootstrap.min.css';


import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return ( 
    <BrowserRouter> 
        <Navigation/>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/startup' component={Startup} />
          <Route exact={true} path='/register' component={Register} />
          <Route exact={true} path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
