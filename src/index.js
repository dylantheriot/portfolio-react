import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import { HashRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App}/>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
