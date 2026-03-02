import { useState } from 'react';
import Resume from '../../assets/Theriot_Official_Resume.pdf';
import { PopInBottom } from '../shared/ScrollAnimation';
import { GlowingEffect } from '../ui/glowing-effect';
import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  const [emailHovered, setEmailHovered] = useState(false);
  return (
    <footer className="py-24 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <PopInBottom threshold={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">Let's connect.</h2>

          <a
            href="mailto:dylantheriot.business@gmail.com"
            className="text-xl md:text-2xl font-bold inline-block"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
            style={{
              backgroundImage: 'linear-gradient(to right, #F5F5F7 50%, #2563EB 50%)',
              backgroundSize: '200% 100%',
              backgroundPosition: emailHovered ? '0% center' : '100% center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: emailHovered ? 'background-position 1s ease-out' : 'background-position 0.3s ease-in',
            }}
          >
            dylantheriot.business@gmail.com
          </a>


          <SocialLinks className="flex justify-center gap-5 mt-8" />

          <span className="relative inline-block mt-8 rounded-full">
            <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block px-6 py-2.5 rounded-full border border-border text-sm text-secondary hover:text-text hover:border-indigo transition-all"
            >
              View Resume
            </a>
          </span>

          <p className="text-tertiary text-xs mt-12">
            &copy; {new Date().getFullYear()} Dylan Theriot
          </p>
        </PopInBottom>
      </div>
    </footer>
  );
}
