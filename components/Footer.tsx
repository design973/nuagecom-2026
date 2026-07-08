import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Container } from './Container';

const NAV = [
  { label: 'Expertises', href: '/expertises' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Intelligence Artificielle', href: '/intelligence-artificielle' },
  { label: 'Formations', href: '/formations' },
  { label: "L'agence", href: '/agence' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="font-mono text-lg text-foreground">
              Nuage<span className="text-brand-blue">com</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-foreground-muted">
              Agence de communication, marketing et transformation numérique en Guyane depuis 2016.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-foreground-muted transition-colors hover:text-brand-blue">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-foreground-muted transition-colors hover:text-brand-blue">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-foreground-muted transition-colors hover:text-brand-blue">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <nav aria-label="Navigation secondaire">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground-muted transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Nuagecom. Tous droits réservés.</p>
          <div className="flex gap-6">
            {LEGAL.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
