import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine des classes conditionnelles (clsx) puis résout les conflits
 * entre classes Tailwind concurrentes (tailwind-merge) — ex. `cn('px-4', condition && 'px-6')`
 * ne laissera que `px-6` au lieu d'empiler les deux et de laisser le CSS trancher
 * arbitrairement selon l'ordre d'apparition dans la feuille de style.
 *
 * Utilisé par tous les composants UI (Button, Badge, Card, Container...) pour
 * composer classes de base + variantes + classes passées en prop.
 *
 * @example
 * cn('rounded-card px-4', isActive && 'border-brand-blue', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
