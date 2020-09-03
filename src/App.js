import React from 'react';
import './assets/index.css';
import HomePage from './components/home_page/HomePage';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
    <div className="relative bg-pastelBlue-100 min-h-full w-full bg-height">
      <Menu />
      <div className="relative h-full font-avenir">
        <HomePage />
      </div>
    </div>
    </>
  );
}

export default App;
