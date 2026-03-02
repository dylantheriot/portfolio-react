import { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function ExpandableGroup({ title, count, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, open]);

  const spring = useSpring({
    height: open ? contentHeight : 0,
    opacity: open ? 1 : 0,
    config: { tension: 250, friction: 30 },
  });

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-lg md:text-xl font-bold text-text group-hover:text-indigo transition-colors">
            {title}
          </h3>
          <span className="text-tertiary text-sm">({count})</span>
        </div>
        <svg
          className={`w-5 h-5 text-tertiary transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <animated.div style={{ ...spring, overflow: 'hidden' }}>
        <div ref={contentRef} className="pb-4">
          {children}
        </div>
      </animated.div>
    </div>
  );
}
