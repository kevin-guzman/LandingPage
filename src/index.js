import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from './components/Card'
import ProyectsPage from '../src/pages/Proyects'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')
const element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const elementApp =(
  <App/>
)

const elementProyects = (
  <ProyectsPage/>
)

ReactDOM.render( elementApp , container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
