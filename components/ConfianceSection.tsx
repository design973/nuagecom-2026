'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '@/lib/hooks/useCountUp';
import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { Card } from './ui/Card';

// TODO: remplacer par les vrais logos clients (SVG monochrome) une fois fournis
const LOGOS = ['Client A', 'Client B', 'Client C', 'Institution D', 'Client E', 'Institution F'];

// Chiffres distincts de ceux du Hero, pour éviter la redondance (cf. arbitrage validé)
const STATS = [
  { id: 'clients', value: 40, suffix: '+', label: 'Clients accompagnés' },
  { id: 'sectors', value: 9, label: "Secteurs d'activité" },
  { id: 'delivered', value: 100, suffix: '%', label: 'Projets livrés dans les délais' },
];

const TESTIMONIALS = [
  {
    name: 'Prénom Nom',
    role: 'Fonction, Structure',
    quote: 'Une agence qui comprend nos enjeux et nous accompagne dans la durée.',
  },
  {
    name: 'Prénom Nom',
    role: 'Fonction, Structure',
    quote: 'Un vrai partenaire, pas un simple prestataire.',
  },
  {
    name: 'Prénom Nom',
    role: 'Fonction, Structure',
    quote: 'Rigueur, réactivité et créativité à chaque étape.',
  },
];

function StatItem({ stat }: { stat: (typeof STATS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp(stat.value, isInView);

  return (
    <div ref={ref} className="text-center">
      <p className="font-mono text-4xl font-semibold text-foreground sm:text-5xl">
        {count}
        {stat.suffix ?? ''}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.06em] text-foreground-muted">{stat.label}</p>
    </div>
  );
}

export function ConfianceSection() {
  return (
    <section className="bg-background-secondary py-section lg:py-section-lg">
      <Container>
        <SectionHeading kicker="Confiance" title="Ils nous font confiance" align="center" />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70 grayscale">
          {LOGOS.map((logo) => (
            <span key={logo} className="font-mono text-sm text-foreground-muted">
              {logo}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-y border-border py-12 sm:grid-cols-3">
          {STATS.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <p className="text-sm leading-relaxed text-foreground-muted">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-foreground">{testimonial.name}</p>
              <p className="text-xs text-foreground-muted">{testimonial.role}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
