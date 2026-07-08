import { SectionHeading } from './SectionHeading';
import { Container } from './Container';

const STEPS = [
  {
    number: '01',
    title: 'Découverte & Accompagnement',
    description: 'Audit de votre contexte, de vos objectifs et de vos contraintes.',
  },
  {
    number: '02',
    title: 'Stratégie & Recommandations',
    description: "Un plan d'action clair, priorisé et mesurable.",
  },
  {
    number: '03',
    title: 'Création & Production',
    description: 'Design, contenus et développement, pilotés par la même équipe.',
  },
  {
    number: '04',
    title: 'Déploiement',
    description: 'Mise en ligne, lancement et diffusion coordonnés.',
  },
  {
    number: '05',
    title: 'Suivi & Optimisation',
    description: 'Mesure des résultats et amélioration continue.',
  },
];

export function MethodSection() {
  return (
    <section id="methode" className="bg-background py-section lg:py-section-lg">
      <Container>
        <SectionHeading kicker="Notre méthode" title="De l'idée à la performance, un processus maîtrisé" align="center" />

        <div className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent md:block"
          />
          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-blue/40 bg-background font-mono text-sm text-brand-blue">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
