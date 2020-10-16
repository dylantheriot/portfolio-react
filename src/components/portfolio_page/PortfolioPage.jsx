import React, { useRef } from 'react';
import MenuWrapper from '../menu/MenuWrapper';
import PortfolioMoreInfo from './PortfolioMoreInfo';
import { useSpring, useChain, animated } from 'react-spring';
import { useFadeInAnimationRef, useFadeInLeftRef, useWidthExtendAnimation, useFadeInDownRef } from '../shared/Animations';

function PortfolioPageContent() {

  const title = useRef();
  const description = useRef();
  const bar = useRef();
  const scroll = useRef();
  const scrollBar = useRef();

  const titleSpring = useFadeInLeftRef(title);
  const descriptionSpring = useFadeInLeftRef(description);
  const barSpring = useWidthExtendAnimation(bar);

  const scrollSpring = useFadeInDownRef(scroll);
  const scrollBarSpring = useFadeInAnimationRef(scrollBar);

  useChain([title, bar, description, scroll, scrollBar], [0, 0, 0.4, 0.5, 0.6]);

  return (
    <div id="portfolio-page" className="p-2 text-pastelGreen-800 w-auto text-lg md:text-2xl">
      <div className="container px-4 md:px-8 mx-auto w-auto">
        <div id="about-intro" className="relative h-auto screen-vh">
          <animated.h1 style={titleSpring} className="text-4xl md:text-6xl mt-2 md:mt-8 font-bold w-full leading-8">
          <span className="text-pastelGreen-500">//</span> Portfolio
          </animated.h1>
          <animated.div style={barSpring} className="w-20 md:w-32 h-2 bg-pastelGreen-500 mt-2 md:mt-8 mb-2 md:ml-0 md:mr-auto"></animated.div>
          <animated.p style={descriptionSpring} className="mt-8">As a <strong>hackathon enthusiast</strong>, most of my personal projects have been built throughout hackathons. I focus primarily on <strong>front-end web and app</strong> development, but often play devops or back-end design/architecture roles. My primary languages and frameworks are <strong>Flutter/Dart, HTML/CSS/JS, Python/Flask, React, Bootstrap, and TailwindCSS.</strong></animated.p>
          <div className="mt-8 lg:mt-32 min-h-auto about-scroll text-center flex flex-col items-center">
            <animated.p style={scrollSpring}>SCROLL</animated.p>
            <animated.div style={scrollBarSpring} className="vertical-line bg-pastelGreen-900 scroll-bar-height"></animated.div>
          </div>
        </div>
        <PortfolioMoreInfo />
      </div>
      <div className="h-16"></div>
    </div>
  );
}

function PortfolioPage() {

  return (
    <MenuWrapper color="pastelGreen"  openPage="Portfolio" page={<PortfolioPageContent />} />
  );
}

export default PortfolioPage;