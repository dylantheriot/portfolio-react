import { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function AnimatedCounter({ value, suffix = '', decimals = 0, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const spring = useSpring({
    val: visible ? value : 0,
    from: { val: 0 },
    config: { tension: 30, friction: 20 },
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
        <animated.span>
          {spring.val.to((v) => v.toFixed(decimals))}
        </animated.span>
        <span>{suffix}</span>
      </div>
      <p className="text-secondary text-sm md:text-base mt-2 uppercase tracking-widest">{label}</p>
    </div>
  );
}
