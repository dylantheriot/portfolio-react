import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom'

function MenuOpen(props) {
  return (
    <>
      <div className="min-h-full h-full overflow-hidden bg-red-500">
        <Menu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
        <div className="px-4 md:px-12 w-full flex flex-col justify-evenly font-bold text-6xl" style={{ height: '80%' }}>
          <Link to="/">
            Home
        </Link>
          <Link to="/about">
            About
        </Link>
          <h1>
            Work
        </h1>
          <h1>
            Projects
        </h1>
          <h1>
            Leadership
        </h1>
        </div>
      </div>
    </>
  );

}

export default MenuOpen;