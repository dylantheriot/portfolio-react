import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import HomePage from './components/home_page/HomePage';
import AboutPage from './components/about_page/AboutPage';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
