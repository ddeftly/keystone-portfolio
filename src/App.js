import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Keystone from './pages/keystone';

const App = () => (
  <Switch>
    <Route path='/home' component={Home}/>
    <Route path='/portfolio' component={Portfolio}/>
    <Route path='/keystone' component={Keystone}/>
    <Home/>
  </Switch>
)

export default App;
