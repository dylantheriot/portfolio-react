import React, { useState, useRef } from 'react';
import MenuWrapper from '../menu/MenuWrapper';
import { useSpring, useChain, animated } from 'react-spring';
import { useFadeInAnimationRef, useFadeInLeftRef, useWidthExtendAnimation, useFadeInDownRef } from '../shared/Animations';
import TheriotPFP from '../../assets/images/theriot_pfp.png';
import { PopInLeft, PopInRight, PopInBottom } from 'react-spring-pop';

function Page656Content() {

  const title = useRef();
  const description = useRef();
  const bar = useRef();
  const scroll = useRef();
  const scrollBar = useRef();
  const pfp = useRef();

  const titleSpring = useFadeInAnimationRef(title);
  const barSpring = useWidthExtendAnimation(bar);
  const pfpSpring = useFadeInDownRef(pfp);
  const descriptionSpring = useFadeInDownRef(description);

  const scrollSpring = useFadeInDownRef(scroll);
  const scrollBarSpring = useFadeInAnimationRef(scrollBar);

  useChain([pfp, title, bar, description, scroll, scrollBar], [0, 0, 0, 0.4, 0.5, 0.6]);

  return (
    <div id="about-page" className="p-2 text-pastelBlue-700 w-auto text-lg md:text-2xl">
      <div className="container px-4 md:px-8 mx-auto w-auto">
        <div id="about-intro" className="relative h-auto" style={{ marginTop: '10vh' }}>
          <animated.div className="relative z-10" style={pfpSpring}>
            <img id="pfp" className="relative rounded-full border-solid border-pastelBlue-500 border-4 w-auto h-32 md:h-48 lg:h-64" src={TheriotPFP} />
          </animated.div>
          <animated.h1 style={titleSpring} className="text-4xl md:text-6xl mt-2 md:mt-8 font-bold w-full leading-8">
            Dylan Theriot<span className="text-pastelBlue-500"></span>
          </animated.h1>
          <animated.div style={barSpring} className="w-20 md:w-32 h-2 bg-pastelBlue-500 mt-2 md:mt-8 mb-2 md:ml-0 md:mr-auto"></animated.div>
          <animated.p style={descriptionSpring}>I joined <strong>Computers and New Media</strong> to better understand the way humans interact with technology. I'm extremely interested in the art of story telling and can't wait to dive deeper into the ways that has changed, and will continue to change, with the advancements of technology.
          </animated.p>
          <div className="mt-8 lg:mt-32 min-h-auto about-scroll text-center flex flex-col items-center">
            <animated.p style={scrollSpring}>SCROLL</animated.p>
            <animated.div style={scrollBarSpring} className="vertical-line bg-pastelBlue-900 scroll-bar-height" ></animated.div>
          </div>
          {/* additional info */}
          <PopInLeft once={true} threshold={0.5}>
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex flex-col w-full lg:w-2/3">
                <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold underline">
                  My Media Usage
                </h2>
                <div className='my-4'>
                  <h3 className='underline font-bold'>Cellphone</h3>
                  <ul>
                    <li>- Social Media</li>
                    <li>- Communication</li>
                    <li>- Photography</li>
                  </ul>
                </div>
                <div className='my-4'>
                  <h3 className='underline font-bold'>Movies</h3>
                  <ul>
                    <li>- Super Hero Movies</li>
                    <li>- Documentaries</li>
                    <li>- RomComs</li>
                  </ul>
                </div>
                <div className="my-4">
                  <h3 className='underline font-bold'>Music</h3>
                  <ul>
                    <li>- Pop Music</li>
                    <li>- Show Tunes</li>
                    <li>- Taylor Swift</li>
                  </ul>
                </div>
                <div className="my-4">
                  <h3 className='underline font-bold'>Computer Games</h3>
                  <ul>
                    <li>- MOBA</li>
                    <li>- FPS</li>
                  </ul>
                </div>
                <div className="my-4">
                  <h3 className='underline font-bold'>Email</h3>
                  <ul>
                    <li>- School</li>
                    <li>- Personal</li>
                    <li>- Business</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:pl-8">
                <img className="rounded-lg border-4 w-full md:w-1/2 lg:w-full md:mb-4 lg:mb-0 border-solid border-pastelBlue-500 shadow shadow-lg" src={require(`../../assets/images/about_page/hobbies.JPG`)} />
              </div>
            </div>
          </PopInLeft>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
}

function Page656() {

  return (
    <MenuWrapper color="pastelBlue" openPage="" page={<Page656Content />} />
  );
}

export default Page656;