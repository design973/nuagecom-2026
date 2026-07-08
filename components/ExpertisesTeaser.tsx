import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { ExpertiseCard } from './ExpertiseCard';
import { Button } from './ui/Button';

// 9 pôles alignés sur ROADMAP.md Sprint 3 + Photographie & Vidéo (arbitrage validé)
const POLES = [
  { title: 'Communication', description: 'Une stratégie claire avant chaque action.', href: '/expertises#communication' },
  {
    title: 'Développement Web',
    description: 'Des sites et outils qui travaillent pour vous, IA comprise.',
    href: '/expertises#web',
  },
  { title: 'Graphisme', description: 'Une image qui inspire confiance durablement.', href: '/expertises#graphisme' },
  {
    title: 'Social Media',
    description: 'Une présence qui construit votre réputation.',
    href: '/expertises#social-media',
  },
  { title: 'Print', description: "Une communication qui marque, au-delà de l'écran.", href: '/expertises#print' },
  {
    title: 'Événementiel',
    description: 'Des moments qui rassemblent et marquent les esprits.',
    href: '/expertises#evenementiel',
  },
  {
    title: 'Photographie & Vidéo',
    description: 'Des images qui racontent votre histoire.',
    href: '/expertises#photo-video',
  },
  { title: 'Formation', description: "Des équipes autonomes, y compris sur l'IA.", href: '/formations' },
  {
    title: 'Intelligence artificielle',
    description: "L'IA au service de la clarté, pas de la mode.",
    href: '/intelligence-artificielle',
  },
];

export function ExpertisesTeaser() {
  return (
    <section id="expertises" className="bg-background py-section lg:py-section-lg">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            kicker="Expertise"
            title="Une expertise complète, une vision unique"
            description="Neuf pôles, une seule agence — de la stratégie à la production, jusqu'à l'intelligence artificielle."
          />
          <Button href="/expertises" variant="tertiary" showArrow className="shrink-0">
            Voir toutes nos expertises
          </Button>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {POLES.map((pole) => (
            <ExpertiseCard key={pole.title} {...pole} className="w-[280px] shrink-0 snap-start sm:w-[320px]" />
          ))}
        </div>
      </Container>
    </section>
  );
}
