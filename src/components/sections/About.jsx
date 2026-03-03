import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import about from '../../data/about';
import { PopIn } from '../shared/ScrollAnimation';
import { GlowingEffect } from '../ui/glowing-effect';

const aboutImages = import.meta.glob('../../assets/images/about/*.{png,jpg,jpeg,webp}', { eager: true });

// Map labels to filename stems
const LABEL_TO_FILE = {
  Tennis: 'tennis',
  Music: 'music',
  Gaming: 'gaming',
  'San Francisco': 'sanfrancisco',
};

function findImage(stem) {
  const entry = Object.entries(aboutImages).find(([path]) => {
    const filename = path.split('/').pop().split('.')[0];
    return filename === stem;
  });
  return entry ? entry[1].default : null;
}

// Per-image object-fit overrides
const IMAGE_STYLES = {
  tennis: { objectPosition: 'center 60%' },
  gaming: { objectPosition: 'center 10%' },
};

// Ordered slideshow: music first (default), then the rest
const SLIDESHOW_STEMS = ['music', 'tennis', 'gaming', 'sanfrancisco'];
const ALL_IMAGES = SLIDESHOW_STEMS.map(findImage).filter(Boolean);

const TILE = 'relative bg-surface rounded-xl border border-border p-5';

function PhotoTile({ imageSrc, imageKey }) {
  const transitions = useTransition({ src: imageSrc, key: imageKey }, {
    keys: (item) => item.src,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <PopIn threshold={0.15} className="h-full">
      <div className={`${TILE} h-full p-1`}>
        <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="absolute inset-1 overflow-hidden rounded-lg">
          {transitions((style, item) =>
            item.src ? (
              <animated.img
                style={{ ...style, ...IMAGE_STYLES[item.key] }}
                src={item.src}
                alt="About me"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <animated.div
                style={style}
                className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo/20 to-pink/20"
              />
            )
          )}
        </div>
      </div>
    </PopIn>
  );
}

function LocationTile({ onHover, onLeave }) {
  return (
    <PopIn threshold={0.15} delay={80}>
      <div className={TILE} onMouseEnter={onHover} onMouseLeave={onLeave}>
        <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <span className="text-2xl block mb-2">📍</span>
        <p className="text-text font-bold text-sm">{about.location}</p>
      </div>
    </PopIn>
  );
}

function InterestTile({ interest, delay, onHover, onLeave }) {
  return (
    <PopIn threshold={0.15} delay={delay}>
      <div className={TILE} onMouseEnter={onHover} onMouseLeave={onLeave}>
        <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <span className="text-2xl block mb-2">{interest.emoji}</span>
        <p className="text-text font-bold text-sm">{interest.label}</p>
      </div>
    </PopIn>
  );
}

function CurrentlyTile() {
  return (
    <PopIn threshold={0.15} delay={320}>
      <div className={TILE}>
        <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-tertiary text-xs uppercase tracking-wider">Currently</span>
        </div>
        <p className="text-secondary text-sm">{about.currently}</p>
      </div>
    </PopIn>
  );
}

export default function About() {
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  // Auto-cycle slideshow when nothing is hovered
  useEffect(() => {
    if (hoveredLabel !== null) return;
    const id = setInterval(() => {
      setSlideshowIndex((prev) => (prev + 1) % ALL_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, [hoveredLabel]);

  // Derive the current image and its key (stem)
  const currentKey = hoveredLabel
    ? LABEL_TO_FILE[hoveredLabel]
    : SLIDESHOW_STEMS[slideshowIndex];
  const currentImage = hoveredLabel
    ? findImage(currentKey)
    : ALL_IMAGES[slideshowIndex];

  const hoverHandlers = (label) => ({
    onHover: () => setHoveredLabel(label),
    onLeave: () => setHoveredLabel(null),
  });

  return (
    <section className="pt-24 pb-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-tertiary mb-8 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Photo — full width on mobile, 2x2 on desktop */}
          <div className="col-span-2 min-h-[250px] md:min-h-0 md:row-span-2 overflow-hidden">
            <PhotoTile imageSrc={currentImage} imageKey={currentKey} />
          </div>

          {/* Location */}
          <LocationTile {...hoverHandlers('San Francisco')} />

          {/* First interest (Gaming) */}
          <InterestTile interest={about.interests[0]} delay={160} {...hoverHandlers(about.interests[0].label)} />

          {/* Remaining interests */}
          {about.interests.slice(1).map((interest, i) => (
            <InterestTile key={interest.label} interest={interest} delay={240 + i * 80} {...hoverHandlers(interest.label)} />
          ))}

          {/* Currently */}
          <CurrentlyTile />
        </div>
      </div>
    </section>
  );
}
