import about from '../../data/about';
import { PopIn } from '../shared/ScrollAnimation';
import { GlowingEffect } from '../ui/glowing-effect';

const aboutImages = import.meta.glob('../../assets/images/about/*.{png,jpg,jpeg,webp}', { eager: true });

function getPhoto() {
  const entries = Object.values(aboutImages);
  return entries.length > 0 ? entries[0].default : null;
}

const TILE = 'relative bg-surface rounded-xl border border-border p-5';

function PhotoTile() {
  const src = getPhoto();
  return (
    <PopIn threshold={0.15}>
      <div className={`${TILE} md:col-span-2 md:row-span-2 aspect-square md:aspect-auto overflow-hidden p-0`}>
        <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        {src ? (
          <img src={src} alt="About me" className="w-full h-full object-cover rounded-xl" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo/20 to-pink/20 rounded-xl min-h-[200px]" />
        )}
      </div>
    </PopIn>
  );
}

function LocationTile() {
  return (
    <PopIn threshold={0.15} delay={80}>
      <div className={TILE}>
        <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <span className="text-2xl block mb-2">📍</span>
        <p className="text-text font-bold text-sm">{about.location}</p>
      </div>
    </PopIn>
  );
}

function InterestTile({ interest, delay }) {
  return (
    <PopIn threshold={0.15} delay={delay}>
      <div className={TILE}>
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
  return (
    <section className="pt-24 pb-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-tertiary mb-8 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Photo — full width on mobile, 2x2 on desktop */}
          <div className="col-span-2 md:row-span-2">
            <PhotoTile />
          </div>

          {/* Location */}
          <LocationTile />

          {/* First interest (Gaming) */}
          <InterestTile interest={about.interests[0]} delay={160} />

          {/* Remaining interests */}
          {about.interests.slice(1).map((interest, i) => (
            <InterestTile key={interest.label} interest={interest} delay={240 + i * 80} />
          ))}

          {/* Currently */}
          <CurrentlyTile />
        </div>
      </div>
    </section>
  );
}
