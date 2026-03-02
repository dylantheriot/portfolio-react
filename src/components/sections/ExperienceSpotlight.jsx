import { useState } from 'react';
import experience from '../../data/experience';
import { PopInLeft } from '../shared/ScrollAnimation';
import { GlowingEffect } from '../ui/glowing-effect';

const companyImages = import.meta.glob('../../assets/images/companies/*.{png,jpg,jpeg,svg,webp}', { eager: true });

function getCompanyImage(filename) {
  if (!filename) return null;
  const match = Object.entries(companyImages).find(([path]) => path.endsWith('/' + filename));
  return match ? match[1].default : null;
}

function CompanyIcon({ company, image, color }) {
  const src = getCompanyImage(image);
  if (src) {
    return (
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-surface overflow-hidden flex items-center justify-center shrink-0">
        <img
          src={src}
          alt={company}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
      style={{ backgroundColor: color }}
    >
      {company.charAt(0)}
    </div>
  );
}

function TimelineEntry({ entry }) {
  const [hovered, setHovered] = useState(false);
  const Wrapper = entry.url ? 'a' : 'div';
  const linkProps = entry.url ? { href: entry.url, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <PopInLeft threshold={0.15}>
      <Wrapper
        {...linkProps}
        className="relative rounded-xl p-4 block cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="relative flex gap-4 md:gap-6">
          {/* Company icon */}
          <div className="relative z-10 shrink-0">
            <CompanyIcon company={entry.company} image={entry.image} color={entry.color} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pb-2">
            <p className="text-tertiary text-xs uppercase tracking-wider">{entry.date}</p>
            <h3
              className="font-bold text-lg leading-tight"
              style={{
                backgroundImage: 'linear-gradient(to right, #2563EB 50%, #F5F5F7 50%)',
                backgroundSize: '200% 100%',
                backgroundPosition: hovered ? '0% center' : '100% center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: hovered ? 'background-position 1s ease-out' : 'background-position 0.3s ease-in',
              }}
            >
              {entry.company}
              {entry.url && (
                <svg
                  className="w-3.5 h-3.5 inline-block ml-1.5 mb-0.5"
                  style={{
                    opacity: hovered ? 1 : (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0),
                    transition: 'opacity 0.3s',
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#2563EB"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              )}
            </h3>
            <p className="text-secondary text-sm">{entry.role}</p>
          </div>
        </div>
      </Wrapper>
    </PopInLeft>
  );
}

export default function ExperienceSpotlight() {
  const professional = experience.filter((e) => e.era === 'professional');
  const earlier = experience.filter((e) => e.era === 'earlier');

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Professional */}
        <p className="text-xs uppercase tracking-[0.3em] text-tertiary mb-8">Professional</p>
        <div className="relative">
          {/* Continuous timeline line */}
          <div className="absolute left-[36px] md:left-[40px] top-0 bottom-0 w-px bg-border" />
          <div className="flex flex-col gap-6">
            {professional.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-10" />

        {/* Earlier */}
        <p className="text-xs uppercase tracking-[0.3em] text-tertiary mb-8">Earlier</p>
        <div className="relative">
          {/* Continuous timeline line */}
          <div className="absolute left-[36px] md:left-[40px] top-0 bottom-0 w-px bg-border" />
          <div className="flex flex-col gap-6">
            {earlier.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
