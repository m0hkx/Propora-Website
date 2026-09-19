import { useEffect, useState } from 'react';
import Icon from './Icon.tsx';
import logoMark from '../assets/logo-mark-white.png';

const links = ['Features', 'Solutions', 'Pricing', 'Resources'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="topbar" id="top">
      <div className="wrap topbar-float">
        <div className={`topbar-bar${scrolled ? ' scrolled' : ''}`}>
          <a className="brand" href="#top" aria-label="Propora home">
            <span className="brand-mark" aria-hidden="true">
              <img src={logoMark} alt="" width="19" height="19" />
            </span>
            Propora
          </a>
          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </nav>
          <div className="topbar-actions">
            <a className="signin-link" href="#cta">
              Sign in
            </a>
            <a className="btn btn-teal" href="#cta">
              Get started
            </a>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
        <nav
          id="mobile-menu"
          className={`mobile-menu${open ? ' open' : ''}`}
          aria-label="Mobile"
        >
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)}>
            Sign in
          </a>
          <a className="btn btn-teal" href="#cta" onClick={() => setOpen(false)}>
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
