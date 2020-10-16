import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom'
import { useSpring, animated, useChain } from 'react-spring';

function MenuOpen(props) {

  const openNavSpring = useSpring({
    height: props.menuOpen ? "100%" : "0%",
  });

  return (
    <>
      <animated.div className={`h-full overflow-hidden bg-${props.color}-0`} style={openNavSpring}>
        <Menu menuOpen={props.menuOpen} color={props.color} setMenuOpen={props.setMenuOpen} />
        <div className="px-4 md:px-12 w-full flex flex-col justify-evenly font-bold text-5xl md:text-6xl" style={{ height: '80%' }}>
          <Link to="/" className={props.openPage === 'Home' ? `underline` : ''}>
            Home
            </Link>
          <Link to="/about" className={props.openPage === 'About' ? `underline` : ''}>
            About
          </Link>
          <Link to="/portfolio" className={props.openPage === 'Portfolio' ? `underline` : ''}>
            Portfolio
        </Link>
          <Link to="/experience" className={props.openPage === 'Qualifications' ? `underline` : ''}>
            Experience
        </Link>
          <Link to="/leadership" className={props.openPage === 'Service' ? `underline` : ''}>
            Leadership
        </Link>
        </div>
      </animated.div>
    </>
  );
}

export default MenuOpen;