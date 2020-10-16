import React, { useState, useRef } from 'react';
import MenuWrapper from '../menu/MenuWrapper';
import './AboutPage.css';
import AboutMoreInfo from './AboutMoreInfo';
import { useSpring, useChain, animated } from 'react-spring';
import { useFadeInAnimationRef, useFadeInLeftRef, useWidthExtendAnimation, useFadeInDownRef } from '../shared/Animations';

function AboutPageContent() {

  const title = useRef();
  const description = useRef();
  const bar = useRef();
  const scroll = useRef();
  const scrollBar = useRef();

  const titleSpring = useFadeInAnimationRef(title);
  const descriptionSpring = useFadeInDownRef(description);
  const barSpring = useWidthExtendAnimation(bar);

  const scrollSpring = useFadeInDownRef(scroll);
  const scrollBarSpring = useFadeInAnimationRef(scrollBar);

  useChain([title, bar, description, scroll, scrollBar], [0, 0, 0.4, 0.5, 0.6]);

  return (
    <div id="about-page" className="p-2 text-pastelPurple-700 w-auto text-lg md:text-2xl">
      <div className="container px-4 md:px-8 mx-auto w-auto">
        <div id="about-intro" className="relative h-auto screen-vh">
          <animated.h1 style={titleSpring} className="text-4xl md:text-6xl mt-2 md:mt-8 font-bold w-full leading-8">
            About me<span className="text-pastelPurple-500">.</span>
          </animated.h1>
          <animated.div style={barSpring} className="w-20 md:w-32 h-2 bg-pastelPurple-500 mt-2 md:mt-8 mb-2 md:ml-0 md:mr-auto"></animated.div>
          <animated.div style={descriptionSpring}>
            <p><i>Fullstack developer. Hackathon enthusiast. Brockman Scholar.</i></p>
          </animated.div>
          <animated.p style={descriptionSpring}>Dedicated, curious, self-motivated learner. I love <strong>web and app development</strong>, and I am always looking for new ways to improve my understanding of computer science and cybersecurity. The digital age is upon us, and I hope to make a positive impact going into the future. <strong>Learning and leading</strong> are what I do best!
        </animated.p>
          <div className="mt-8 lg:mt-32 min-h-auto about-scroll text-center flex flex-col items-center">
            <animated.p style={scrollSpring}>SCROLL</animated.p>
            <animated.div style={scrollBarSpring} className="vertical-line bg-pastelPurple-900 scroll-bar-height" ></animated.div>
          </div>
        <AboutMoreInfo />
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
}

function AboutPage() {

  return (
    <MenuWrapper color="pastelPurple" openPage="About" page={<AboutPageContent />} />
  );
}

export default AboutPage;