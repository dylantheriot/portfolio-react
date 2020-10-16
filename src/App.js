import React, { useContext } from 'react';
import './assets/index.css';
import HomePage from './components/home_page/HomePage';
import AboutPage from './components/about_page/AboutPage';
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import { __RouterContext } from 'react-router';
import PortfolioPage from './components/portfolio_page/PortfolioPage';
import QualificationsPage from './components/qualifications_page/QualificationsPage';
import ServicePage from './components/service_page/ServicePage';
import ScrollToTop from './components/shared/ScrollToTop';

function App(props) {

  return (
    <>
      <HashRouter>
      <ScrollToTop />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/portfolio' component={PortfolioPage} />
          <Route exact path='/experience' component={QualificationsPage} />
          <Route exact path='/leadership' component={ServicePage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
