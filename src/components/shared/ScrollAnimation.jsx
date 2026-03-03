import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const presets = {
  bounceInLeft: {
    from: { opacity: 0, transform: 'translateX(-80px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 200, friction: 20 },
  },
  bounceInRight: {
    from: { opacity: 0, transform: 'translateX(80px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 200, friction: 20 },
  },
  popIn: {
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 20 },
  },
  fadeInLeft: {
    from: { opacity: 0, transform: 'translateX(-60px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 170, friction: 26 },
  },
  popInLeft: {
    from: { opacity: 0, transform: 'translateX(-60px) scale(0.9)' },
    to: { opacity: 1, transform: 'translateX(0px) scale(1)' },
    config: { tension: 200, friction: 20 },
  },
  popInRight: {
    from: { opacity: 0, transform: 'translateX(60px) scale(0.9)' },
    to: { opacity: 1, transform: 'translateX(0px) scale(1)' },
    config: { tension: 200, friction: 20 },
  },
  popInBottom: {
    from: { opacity: 0, transform: 'translateY(60px) scale(0.9)' },
    to: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    config: { tension: 200, friction: 20 },
  },
};

function ScrollAnimation({ preset, threshold = 0.5, once = true, delay = 0, className, children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, once]);

  const { from, to, config } = presets[preset] || presets.popIn;

  const spring = useSpring({
    from,
    to: isVisible ? to : from,
    config,
    delay: isVisible ? delay : 0,
  });

  return (
    <animated.div ref={ref} style={spring} className={className}>
      {children}
    </animated.div>
  );
}

export function BounceInLeft({ threshold, once, children }) {
  return <ScrollAnimation preset="bounceInLeft" threshold={threshold} once={once}>{children}</ScrollAnimation>;
}

export function BounceInRight({ threshold, once, children }) {
  return <ScrollAnimation preset="bounceInRight" threshold={threshold} once={once}>{children}</ScrollAnimation>;
}

export function PopIn({ threshold, once, delay, className, children }) {
  return <ScrollAnimation preset="popIn" threshold={threshold} once={once} delay={delay} className={className}>{children}</ScrollAnimation>;
}

export function FadeInLeft({ threshold, once, children }) {
  return <ScrollAnimation preset="fadeInLeft" threshold={threshold} once={once}>{children}</ScrollAnimation>;
}

export function PopInLeft({ threshold, once, children }) {
  return <ScrollAnimation preset="popInLeft" threshold={threshold} once={once}>{children}</ScrollAnimation>;
}

export function PopInRight({ threshold, once, children }) {
  return <ScrollAnimation preset="popInRight" threshold={threshold} once={once}>{children}</ScrollAnimation>;
}

export function PopInBottom({ threshold, once, children }) {
  return <ScrollAnimation preset="popInBottom" threshold={threshold} once={once}>{children}</ScrollAnimation>;
}

export default ScrollAnimation;
