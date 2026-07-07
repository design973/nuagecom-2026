import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Design system — style des boutons.
// Primaire  : seule couleur d'action du site (beige doré). Le bleu ne sert jamais de CTA.
// Secondaire: bordure bleue, halo lumineux au survol (registre "interactif").
// Tertiaire : lien souligné, pour les actions de moindre priorité.
//
// Le focus clavier n'est pas géré ici : la règle `:focus-visible` globale
// (app/globals.css) s'applique déjà à tous les éléments focusables du site.
const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 ease-premium disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-gold text-background hover:bg-brand-gold-light hover:shadow-card-sm active:scale-[0.98]',
  secondary:
    'border border-brand-blue/50 text-foreground hover:border-brand-blue hover:bg-brand-blue/10 hover:shadow-glow',
  tertiary: 'text-foreground underline-offset-4 hover:underline decoration-brand-blue',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  showArrow,
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  // Lien externe (ex. Calendly) : nouvel onglet, protections noopener/noreferrer
  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  // Lien interne : navigation Next.js
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  // Bouton d'action classique (formulaire, action JS)
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
