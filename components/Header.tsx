'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Container } from './Container';
import { cn } from '@/lib/utils';

// TODO: remplacer par l'URL Calendly définitive de Nuagecom
const CALENDLY_URL = 'https://calendly.com/nuagecom/echange-30-minutes';

const NAV_LINKS = [
  { label: 'Expertises', href: '/expertises' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Intelligence Artificielle', href: '/intelligence-artificielle' },
  { label: 'Formations', href: '/formations' },
  { label: "L'agence", href: '/agence' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
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

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[var(--z-header)] transition-[background-color,backdrop-filter,height] duration-300 ease-premium',
        isScrolled ? 'h-16 glass' : 'h-20 bg-transparent'
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="font-mono text-lg tracking-tight text-foreground"
        >
          Nuage<span className="text-brand-blue">com</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm text-foreground/90 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-blue transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={CALENDLY_URL} external variant="primary" size="sm">
            Planifier un échange
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Menu mobile plein écran */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-[var(--z-overlay)] flex flex-col bg-background px-6 pt-10 transition-[opacity,visibility] duration-300 lg:hidden',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-border pb-6 text-2xl text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          href={CALENDLY_URL}
          external
          variant="primary"
          size="lg"
          className="mt-10 w-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Planifier un échange
        </Button>
      </div>
    </header>
  );
}
