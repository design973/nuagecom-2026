import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'blue' | 'neutral';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

// Design system — style des badges (catégories, tags, labels courts).
//
// Volontairement, il n'existe PAS de variante "gold" : le beige doré est
// réservé exclusivement aux CTA (cf. Button.tsx). Un badge n'est jamais une
// action, donc jamais doré — cela garantit qu'un visiteur associe toujours
// le doré à "je peux cliquer ici pour agir", sans exception ailleurs sur le site.
const variants: Record<BadgeVariant, string> = {
  blue: 'border-brand-blue/30 bg-brand-blue/10 text-brand-blue',
  neutral: 'border-border bg-background-secondary text-foreground-muted',
};

export function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em]',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
