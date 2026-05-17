import { useEffect, useState } from 'react';

export const navItems = [
  { href: '#about', key: 'nav.about' },
  { href: '#journey', key: 'nav.journey' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#contact', key: 'nav.contact' }
];

export const useHeaderLogic = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return {
    isScrolled,
    isMenuOpen,
    setIsMenuOpen,
    closeMenu
  };
};
