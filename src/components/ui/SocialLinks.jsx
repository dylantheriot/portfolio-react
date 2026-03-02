import { useState } from 'react';
import { Github, Mail } from 'lucide-react';

function IconLink({ href, label, children, ...props }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      className="relative block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <span
        className="block text-tertiary transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 text-indigo transition-[clip-path] duration-500 ease-out"
        style={{
          clipPath: hovered ? 'inset(0 0 50% 0)' : 'inset(0 0 100% 0)',
          filter: 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.6))',
        }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 text-indigo transition-[clip-path] duration-500 ease-out"
        style={{
          clipPath: hovered ? 'inset(50% 0 0 0)' : 'inset(100% 0 0 0)',
          filter: 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.6))',
        }}
      >
        {children}
      </span>
    </a>
  );
}

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function SocialLinks({ className = 'flex justify-center gap-4', iconSize = 'w-5 h-5' }) {
  return (
    <div className={className}>
      <IconLink href="https://www.linkedin.com/in/dylan-theriot/" label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className={iconSize} />
      </IconLink>
      <IconLink href="https://github.com/dylantheriot" label="GitHub" target="_blank" rel="noopener noreferrer">
        <Github className={iconSize} />
      </IconLink>
      <IconLink href="mailto:dylantheriot.business@gmail.com" label="Email">
        <Mail className={iconSize} />
      </IconLink>
    </div>
  );
}
