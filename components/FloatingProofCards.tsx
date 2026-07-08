'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '@/lib/hooks/useCountUp';
import { Container } from './Container';
import { cn } from '@/lib/utils';

interface Stat {
  id: string;
  value: number;
  display?: string;
  suffix?: string;
  label: string;
  offset: string;
}

const STATS: Stat[] = [
  { id: 'since', value: 2016, display: '2016', label: 'Depuis', offset: 'lg:translate-y-2' },
  { id: 'projects', value: 150, suffix: '+', label: 'Projets réalisés', offset: 'lg:-translate-y-3' },
  { id: 'experts', value: 12, label: 'Experts dédiés', offset: 'lg:translate-y-4' },
  { id: 'satisfaction', value: 98, suffix: '%', label: 'Clients satisfaits', offset: 'lg:-translate-y-2' },
  { id: 'local', value: 100, suffix: '%', label: 'Conçu en Guyane', offset: 'lg:translate-y-3' },
];

function ProofCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp(stat.value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'animate-float rounded-card-lg border border-brand-blue/20 bg-background-secondary/60 px-6 py-6 text-center shadow-card backdrop-blur-md',
        stat.offset
      )}
      style={{ animationDelay: `${index * 0.4}s` }}
    >
      <p className="font-mono text-3xl font-semibold text-foreground sm:text-4xl">
        {stat.display ?? `${count}${stat.suffix ?? ''}`}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.06em] text-foreground-muted">{stat.label}</p>
    </motion.div>
  );
}

export function FloatingProofCards() {
  return (
    <div className="relative z-10 -mt-24 sm:-mt-28">
      <Container>
        {/* Défilement horizontal sur mobile (scroll-snap), grille dès sm */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-5">
          {STATS.map((stat, index) => (
            <div key={stat.id} className="w-[68%] shrink-0 snap-start sm:w-auto">
              <ProofCard stat={stat} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
