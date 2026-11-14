import { useEffect, useState } from 'react';
import LegoStuds from './LegoStuds';

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Awards', href: '#awards' },
  { label: 'Extracurricular', href: '#extracurricular' },
  { label: 'Wanna Yap?', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg/95 backdrop-blur border-b border-line py-3"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <LegoStuds colors={['red', 'yellow', 'blue']} />
          <span className="font-extrabold text-white">alishbah<span className="text-lego-cyan">.com</span></span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-lego-cyan transition-colors text-white">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
