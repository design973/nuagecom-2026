import { Container } from '@/components/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Page volontairement minimale : elle ne contient aucune section du site.
// Son seul rôle est de vérifier que le Design System fonctionne de bout en
// bout (polices Geist, couleurs, espacements, composants UI). Elle sera
// entièrement remplacée au Sprint 1 par le Header et le Hero.
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <Container as="section" className="flex flex-col items-center gap-6 py-section text-center">
        <Badge variant="blue">Sprint 0 — Configuration du projet</Badge>

        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Nuagecom 2026</h1>

        <p className="max-w-md text-sm text-foreground-muted">
          Design System, polices Geist, composants UI de base et outils installés. Cette page sera
          remplacée au Sprint 1 par le Header et le Hero.
        </p>

        <Button variant="primary" size="md">
          Test du bouton primaire
        </Button>
      </Container>
    </main>
  );
}
