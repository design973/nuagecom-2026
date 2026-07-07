import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

// Design system — carte standard (fond secondaire).
// Les futures cartes "premium" avec visuel (pôles d'expertise, réalisations)
// seront des composants dédiés qui pourront s'appuyer sur celle-ci ou la composer.
export function Card({ className, hoverable = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-border bg-background-secondary p-6 sm:p-8',
        hoverable &&
          'transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-card',
        className
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-xl font-semibold text-foreground', className)} {...props} />;
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('mt-2 text-sm leading-relaxed text-foreground-muted', className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-6 flex items-center', className)} {...props} />;
}
