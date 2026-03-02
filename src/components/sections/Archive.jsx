import { useState } from 'react';
import ExpandableGroup from '../ui/ExpandableGroup';
import projects from '../../data/projects';
import leadership from '../../data/leadership';
import { PopIn } from '../shared/ScrollAnimation';

function SweepLink({ href, children, className = '' }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundImage: 'linear-gradient(to right, #2563EB 50%, currentColor 50%)',
        backgroundSize: '200% 100%',
        backgroundPosition: hovered ? '0% center' : '100% center',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        transition: hovered ? 'background-position 1s ease-out' : 'background-position 0.3s ease-in',
      }}
    >
      {children}
    </a>
  );
}

function ProjectHeader() {
  return (
    <div className="grid grid-cols-[4.5rem_1fr_auto] md:grid-cols-[5rem_1fr_1fr_10rem_6rem] gap-2 md:gap-4 items-center py-2 px-1 border-b border-border text-xs uppercase tracking-wider text-tertiary">
      <span>Year</span>
      <span>Project</span>
      <span className="hidden md:block">Event</span>
      <span className="hidden md:block">Award</span>
      <span className="text-right">Links</span>
    </div>
  );
}

function ProjectRow({ project }) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr_auto] md:grid-cols-[5rem_1fr_1fr_10rem_6rem] gap-2 md:gap-4 items-center py-3 px-1 border-b border-border/30 last:border-0 text-sm">
      <span className="text-tertiary text-xs">{project.date}</span>
      <span className="text-text font-medium truncate">{project.title}</span>
      <span className="text-secondary text-xs hidden md:block truncate">{project.hackathon || '—'}</span>
      {project.award ? (
        <span className="hidden md:block relative group cursor-default">
          <span className="inline-block px-2 py-0.5 rounded-full bg-amber/10 text-amber text-xs max-w-full truncate">
            {project.award}
          </span>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-text text-xs whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-lg">
            {project.award}
          </span>
        </span>
      ) : (
        <span className="hidden md:block text-tertiary/40 text-xs">—</span>
      )}
      <div className="flex gap-2 justify-end">
        {project.links.map((link) => (
          <SweepLink
            key={link.url}
            href={link.url}
            className="text-tertiary text-xs underline underline-offset-2"
          >
            {link.label}
          </SweepLink>
        ))}
      </div>
    </div>
  );
}

function LeadershipRow({ item }) {
  return (
    <div className="grid grid-cols-2 gap-4 items-center py-2.5 px-1 border-b border-border/50 last:border-0 text-sm">
      <span className="text-text font-bold">{item.org}</span>
      <span className="text-secondary text-xs">{item.role}</span>
    </div>
  );
}

export default function Archive() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <PopIn threshold={0.1}>
          <h2 className="text-xs uppercase tracking-[0.3em] text-tertiary mb-8">Side Projects & Leadership</h2>

          <ExpandableGroup title="Projects" count={projects.length}>
            <ProjectHeader />
            {projects.map((p, i) => (
              <ProjectRow key={i} project={p} />
            ))}
          </ExpandableGroup>

          <ExpandableGroup title="Leadership" count={leadership.length}>
            {leadership.map((l, i) => (
              <LeadershipRow key={i} item={l} />
            ))}
          </ExpandableGroup>
        </PopIn>
      </div>
    </section>
  );
}
