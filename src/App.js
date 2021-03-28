import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound';

let App = () => {
  return (
    <BrowserRouter  >
      <Switch>
        <Route exact path="/LandingPage" component={Home}/>
        <Route path="*" component={Home} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;