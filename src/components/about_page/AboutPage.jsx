import React, { useState } from 'react';
import Menu from '../menu/Menu';
import MenuOpen from '../menu/MenuOpen';

function AboutPage() {

  const [menuOpen, setMenuOpen] = useState(() => false);

  return (
    <>
      {
        menuOpen ? <MenuOpen menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> :
          <div className="relative bg-pastelBlue-100 min-h-full w-full bg-height">
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="relative h-full font-avenir">
              <div id="about-page" className="p-2 text-pastelBlue-700 max-w-screen h-full m-auto">
                <div style={{marginTop: '33vh'}}>
                  <h1 className="text-4xl">
                    Hello World
                  </h1>
                </div>
              </div>
            </div>
          </div>
      }

    </>
  );
}

export default AboutPage;