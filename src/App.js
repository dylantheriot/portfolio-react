import React from 'react';
import './assets/index.css';
import HomePage from './components/home_page/HomePage';

function App() {
  return (
    <div className="bg-pastelBlue-100 h-full">
      <div className="h-full font-avenir">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
