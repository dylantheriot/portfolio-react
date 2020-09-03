import React, { useState, useEffect } from 'react';
import './assets/index.css';
import HomePage from './components/home_page/HomePage';
import AboutPage from './components/about_page/AboutPage';
import { HashRouter, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
