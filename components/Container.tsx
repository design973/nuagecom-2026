import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article';
}

/**
 * Grille de mise en page du Design System : largeur max 1440px (`max-w-site`),
 * marges 20px (mobile) / 24px (tablette) / 80px (desktop).
 *
 * Toute future section du site doit s'appuyer sur ce composant pour garantir
 * un alignement horizontal cohérent de bout en bout — jamais de `max-w-*` ou
 * de `px-*` répété "en dur" section par section.
 */
export function Container({ as: Tag = 'div', className, ...props }: ContainerProps) {
  return <Tag className={cn('mx-auto max-w-site px-5 sm:px-6 lg:px-20', className)} {...props} />;
}
