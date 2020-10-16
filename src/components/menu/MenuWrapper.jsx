import React, { useState } from 'react';
import MenuOpen from './MenuOpen';
import Menu from './Menu';

function MenuWrapper(props) {

  const [menuOpen, setMenuOpen] = useState(() => false);

  return (
    <>
    <div className="h-full" style={{display: menuOpen ? 'block' : 'none'}}>
      <MenuOpen menuOpen={menuOpen} setMenuOpen={setMenuOpen} color={props.color} openPage={props.openPage} />
    </div>
    <div style={{display: menuOpen ? 'none' : 'block'}}>
      <div className={`relative bg-${props.color}-100 min-h-full h-auto w-full`}>
        <Menu menuOpen={menuOpen} color={props.color} setMenuOpen={setMenuOpen} />
        <div className="relative h-full font-avenir">
          {props.page}
        </div>
      </div>
    </div>

  </>
  );
}

export default MenuWrapper;