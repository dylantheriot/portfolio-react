import React, { useRef } from 'react';
import MenuWrapper from '../menu/MenuWrapper';
import QualificationsMoreInfo from './QualificationsMoreInfo';
import MyResume from '../../assets/Theriot_Official_Resume.pdf';
import { useSpring, useChain, animated } from 'react-spring';
import { useFadeInAnimationRef, useFadeInRightRef, useWidthExtendAnimation, useFadeInDownRef } from '../shared/Animations';

function QualificationsPageInfo() {

  const title = useRef();
  const description = useRef();
  const bar = useRef();
  const scroll = useRef();
  const scrollBar = useRef();

  const titleSpring = useFadeInRightRef(title);
  const descriptionSpring = useFadeInAnimationRef(description);
  const barSpring = useWidthExtendAnimation(bar);

  const scrollSpring = useFadeInDownRef(scroll);
  const scrollBarSpring = useFadeInAnimationRef(scrollBar);



  useChain([title, bar, description, scroll, scrollBar], [0, 0, 0.4, 0.5, 0.6]);

  return (
    <div id="portfolio-page" className="p-2 text-pastelRed-800 w-auto text-lg md:text-2xl">
      <div className="container px-4 md:px-8 mx-auto w-auto">
        <div id="about-intro" className="relative h-auto screen-vh">
          <animated.h1 className="text-4xl md:text-6xl mt-2 md:mt-8 font-bold w-full leading-8" style={titleSpring}>
            Experience<span className="text-pastelRed-500">;</span>
          </animated.h1>
          <animated.div style={barSpring} className="h-2 bg-pastelRed-500 mt-2 md:mt-8 mb-2 md:ml-0 md:mr-auto"></animated.div>
          <animated.p className="mt-8" style={descriptionSpring}>Although I am a fullstack engineer, I tend to focus more on the <strong>front-end</strong> development and design. My favorite areas of computer science are <strong>cyber security</strong>, <strong>competitive programming</strong>, <strong>R&D</strong>, and <strong>software engineering</strong> I have gained valuable, real world experience from my <strong>internships</strong> and <strong>research</strong>. I am also an active member in the tech Reddit and YouTube community.</animated.p>
          <div className="mt-8 lg:mt-32 min-h-auto about-scroll text-center flex flex-col items-center">
            <animated.p
              style={scrollSpring}
            >SCROLL</animated.p>
            <animated.div className="vertical-line bg-pastelRed-900 scroll-bar-height" style={scrollBarSpring}></animated.div>
          </div>
        </div>
        <QualificationsMoreInfo />
        <br />
        <div className="flex flex-row justify-center">
          <iframe width="100%" height="500px" src={MyResume}></iframe>
        </div>
      </div>

      <div className="h-16"></div>
    </div>
  );
}

function QualificationsPage() {

  return (
    <MenuWrapper color="pastelRed"  openPage="Qualifications" page={<QualificationsPageInfo />} />
  );
}

export default QualificationsPage;