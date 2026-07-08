import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const DIFFERENTIATORS = [
  'Stratégie + exécution intégrées',
  'Ancrage local depuis 2016',
  'Équipe pluridisciplinaire',
  "Projets d'envergure, publics et privés",
];

export function PresentationSection() {
  return (
    <section className="bg-background py-section lg:py-section-lg">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            kicker="L'agence"
            title="Qui sommes-nous"
            description="Depuis 2016, Nuagecom accompagne les entreprises, collectivités et institutions de Guyane dans leur communication, leur marketing et leur transformation numérique — une seule agence, tous les leviers."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {DIFFERENTIATORS.map((item) => (
              <Badge key={item} variant="blue">
                {item}
              </Badge>
            ))}
          </div>
          <Button href="/agence" variant="tertiary" showArrow className="mt-8">
            Découvrir l&apos;agence
          </Button>
        </div>

        {/* TODO: remplacer par une photographie réelle de l'équipe/du studio */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-card-lg border border-border bg-background-secondary">
          <span className="text-sm text-foreground-muted">Visuel équipe / studio — à tourner</span>
        </div>
      </Container>
    </section>
  );
}
