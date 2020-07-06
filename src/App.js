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
import Proyects from '../src/pages/Proyects'
import ProyectsInfo from '../src/pages/ProyectsInfo';
import NotFound from './pages/NotFound';

let App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/proyects/info"  component={ProyectsInfo} />
        <Route path="*" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;