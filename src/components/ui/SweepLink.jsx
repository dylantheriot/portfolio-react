import { useState } from 'react';

export default function SweepLink({ href, children, className = '', hovered: controlledHovered, as: Tag = 'a', ...props }) {
  const [internalHovered, setInternalHovered] = useState(false);
  const hovered = controlledHovered !== undefined ? controlledHovered : internalHovered;

  const isExternal = Tag === 'a' && href && !href.startsWith('mailto:');
  const linkProps = Tag === 'a' ? { href, ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }) } : {};

  return (
    <Tag
      {...linkProps}
      {...props}
      className={`inline-block ${className}`}
      onMouseEnter={() => setInternalHovered(true)}
      onMouseLeave={() => setInternalHovered(false)}
      style={{
        backgroundImage: 'linear-gradient(to right, #2563EB 50%, currentColor 50%)',
        backgroundSize: '200% 100%',
        backgroundPosition: hovered ? '0% center' : '100% center',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        transition: hovered ? 'background-position 0.2s ease-out' : 'background-position 0.15s ease-in',
        ...props.style,
      }}
    >
      {children}
    </Tag>
  );
}
