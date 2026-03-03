import { useState, useEffect } from 'react';
import { useSpring, useChain, useSpringRef, animated } from '@react-spring/web';
import pfp from '../../assets/images/theriot_pfp.png';
import { GlowingEffect } from '../ui/glowing-effect';
import { WavyBackground } from '../ui/wavy-background';
import SocialLinks from '../ui/SocialLinks';

const waveColors = ['#ffffff', '#d4d4d8', '#a1a1aa', '#e4e4e7', '#f4f4f5'];

export default function Hero() {
  const [waveWidth, setWaveWidth] = useState(() => window.innerWidth >= 768 ? 180 : 90);

  useEffect(() => {
    const onResize = () => setWaveWidth(window.innerWidth >= 768 ? 180 : 90);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const pfpRef = useSpringRef();
  const nameRef = useSpringRef();
  const lineRef = useSpringRef();
  const titleRef = useSpringRef();
  const subtitleRef = useSpringRef();
  const linksRef = useSpringRef();

  const pfpSpring = useSpring({
    ref: pfpRef,
    from: { opacity: 0, transform: 'scale(0.7)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 20 },
  });

  const nameSpring = useSpring({
    ref: nameRef,
    from: { opacity: 0, transform: 'translateY(-40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  const lineSpring = useSpring({
    ref: lineRef,
    from: { width: '0%' },
    to: { width: '100%' },
    config: { tension: 120, friction: 20 },
  });

  const titleSpring = useSpring({
    ref: titleRef,
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  const subtitleSpring = useSpring({
    ref: subtitleRef,
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  const linksSpring = useSpring({
    ref: linksRef,
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });

  useChain([pfpRef, nameRef, lineRef, titleRef, subtitleRef, linksRef], [0, 0.15, 0.3, 0.45, 0.6, 0.75]);

  return (
    <section className="relative">
      <WavyBackground
        colors={waveColors}
        backgroundFill="#0A0A0B"
        waveOpacity={0.02}
        blur={5}
        speed="fast"
        waveWidth={waveWidth}
        containerClassName="min-h-screen px-6"
        className="max-w-4xl w-full text-center"
      >
        <animated.div style={pfpSpring} className="flex justify-center mb-6">
          <img
            src={pfp}
            alt="Dylan Theriot"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-border"
            style={{ boxShadow: '0 0 30px rgba(37, 99, 235, 0.2)' }}
          />
        </animated.div>

        <animated.h1
          className="gradient-text font-bold tracking-tight leading-none"
          style={{ ...nameSpring, fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em' }}
        >
          DYLAN THERIOT
        </animated.h1>

        <div className="mx-auto my-6 max-w-md">
          <animated.div
            style={lineSpring}
            className="gradient-bar h-px"
          />
        </div>

        <animated.p
          style={titleSpring}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-text font-bold"
        >
          First Engineer at Loot Labs Inc.
        </animated.p>

        <animated.p
          style={subtitleSpring}
          className="text-secondary italic mt-2 text-sm md:text-base"
        >
          Previously @ Netflix, 8VC, Twitch
        </animated.p>

        <animated.div style={linksSpring} className="flex flex-col items-center mt-8 gap-5">
          <span className="relative rounded-full">
            <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block px-5 py-2 rounded-full border border-border text-sm text-secondary hover:text-text hover:border-indigo transition-all"
            >
              View Resume
            </a>
          </span>
          <SocialLinks />
        </animated.div>
      </WavyBackground>

      <button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bounce-chevron cursor-pointer bg-transparent border-none p-2 z-10"
        onClick={() => {
          const next = document.querySelector('section:nth-of-type(2)');
          if (next) next.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to next section"
      >
        <svg className="w-6 h-6 text-tertiary hover:text-text transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
