import React from 'react';
import { useMediaQuery } from 'react-responsive'

function Menu(props) {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
      <div className={`modified-w-screen z-20 ${props.menuOpen ? 'static' : 'menu-height'} ${(isTabletOrMobile && !props.menuOpen) ? 'bg-' + props.color + '-100' : ''}`}>
        <div className={`text-xl text-${props.color}-800 md:text-4xl font-bold px-4 md:px-12 pt-4 flex flex-row justify-between w-full`}>
          <h2 className="dont-select cursor-pointer focus:outline-none" onClick={(e) => {e.preventDefault(); props.setMenuOpen((prev) => !prev)}}>
            {props.menuOpen ? 'CLOSE' : 'MENU'}
          </h2>
          <a href="mailto:dylantheriot@tamu.edu">
          <h1 className="dont-click">
            CONTACT
          </h1>
          </a>
        </div>
      </div>
    </>
  );

}

export default Menu;