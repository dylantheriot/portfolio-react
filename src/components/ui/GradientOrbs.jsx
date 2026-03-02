import { useEffect, useState } from 'react';

export default function GradientOrbs() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      // Fade in fully over the hero section (one viewport height)
      setOpacity(Math.min(1, scrollY / vh));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0, opacity }}
    >
      <div
        className="orb-1 absolute rounded-full blur-[120px] opacity-20"
        style={{
          width: 500,
          height: 500,
          top: '10%',
          left: '60%',
          background: 'radial-gradient(circle, #2563EB, transparent 70%)',
        }}
      />
      <div
        className="orb-2 absolute rounded-full blur-[120px] opacity-15"
        style={{
          width: 400,
          height: 400,
          top: '50%',
          left: '10%',
          background: 'radial-gradient(circle, #3B82F6, transparent 70%)',
        }}
      />
      <div
        className="orb-3 absolute rounded-full blur-[120px] opacity-15"
        style={{
          width: 350,
          height: 350,
          top: '70%',
          left: '70%',
          background: 'radial-gradient(circle, #EC4899, transparent 70%)',
        }}
      />
    </div>
  );
}
