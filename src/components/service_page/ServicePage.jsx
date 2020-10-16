import React, { useRef } from 'react';
import MenuWrapper from '../menu/MenuWrapper';
import ServiceMoreInfo from './ServiceMoreInfo';
import { useSpring, useChain, animated } from 'react-spring';
import { useFadeInAnimationRef, useFadeInLeftRef, useWidthExtendAnimation, useFadeInDownRef } from '../shared/Animations';

function ServicePageContent() {

  const title = useRef();
  const plus1 = useRef();
  const plus2 = useRef();
  const description = useRef();
  const bar = useRef();
  const scroll = useRef();
  const scrollBar = useRef();

  const titleSpring = useFadeInDownRef(title);
  const descriptionSpring = useFadeInDownRef(description);
  const barSpring = useWidthExtendAnimation(bar);
  const plus1Spring = useFadeInLeftRef(plus1);
  const plus2Spring = useFadeInLeftRef(plus2);


  const scrollSpring = useFadeInDownRef(scroll);
  const scrollBarSpring = useFadeInAnimationRef(scrollBar);

  useChain([title, bar, description, scroll, scrollBar, plus1, plus2], [0, 0, 0.4, 0.5, 0.6, 0.8, 1]);

  return (
    <div id="about-page" className="p-2 text-pastelBrown-700 w-auto text-lg md:text-2xl">
      <div className="container px-4 md:px-8 mx-auto w-auto">
        <div id="about-intro" className="relative h-auto screen-vh">
          <h1 className="text-4xl md:text-6xl mt-2 md:mt-8 font-bold w-full leading-8">
            <animated.span style={titleSpring}>Leadership</animated.span><animated.span style={plus1Spring} className="text-pastelBrown-500">+</animated.span><animated.span style={plus2Spring} className="text-pastelBrown-500">+</animated.span>
          </h1>
          <animated.div style={barSpring} className="w-20 md:w-32 h-2 bg-pastelBrown-500 mt-2 md:mt-8 mb-2 md:ml-0 md:mr-auto"></animated.div>
          <animated.p style={descriptionSpring}>From organizations like Cupcakes for a Cause, the Big Event, or the Houston Food Bank, I've always strived to participate in events that give back to the community. Over time, I've found a love for promoting events and awareness among <strong>engineering students</strong> and <strong>aspiring software developers</strong> through my organizations TAMUhack, Student Engineers' Council, and Chillennium. I hope to share my passion for the field of computer science with those around me.</animated.p>
          <div className="mt-8 lg:mt-32 min-h-auto about-scroll text-center flex flex-col items-center">
            <animated.p style={scrollSpring}>SCROLL</animated.p>
            <animated.div className="vertical-line bg-pastelBrown-900 scroll-bar-height" style={scrollBarSpring}></animated.div>
          </div>
        <ServiceMoreInfo />
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
}

function ServicePage() {

  return (
    <MenuWrapper color="pastelBrown" openPage="Service" page={<ServicePageContent />} />
  );
}

export default ServicePage;