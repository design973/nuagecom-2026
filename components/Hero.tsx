'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Container } from './Container';
import { FloatingProofCards } from './FloatingProofCards';
import { fadeUp, staggerContainer } from '@/lib/motion';

// TODO: remplacer par l'URL Calendly définitive de Nuagecom
const CALENDLY_URL = 'https://calendly.com/nuagecom/echange-30-minutes';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pb-40 sm:pb-48">
      {/* Fond : vidéo définitive à tourner ; glow + dégradés en secours dans l'intervalle */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/images/hero-poster.jpg">
          {/* TODO: tournage définitif (équipe/studio réel — jamais de stock générique) */}
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-glow-blue" />
        <div className="absolute inset-0 bg-fade-bottom" />
        <div className="absolute inset-0 bg-fade-right" />
      </div>

      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="pt-24 lg:pt-32">
        <Container className="flex flex-col">
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.08em] text-brand-blue sm:text-sm"
          >
            Communication · Marketing · Transformation numérique
          </motion.p>

          {/* Copywriting du H1 et du chapô à valider avant mise en production */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-3xl text-[40px] font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-[72px]"
          >
            Votre transformation, pilotée avec clarté.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-foreground-muted sm:text-xl">
            Depuis 2016, nous accompagnons entreprises et institutions de Guyane dans leur stratégie, leur
            communication et leur transformation numérique.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={CALENDLY_URL} external variant="primary" size="lg">
              Planifier un échange de 30 minutes
            </Button>
            <Button href="/realisations" variant="secondary" size="lg" showArrow>
              Voir nos réalisations
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-20 hidden items-center gap-3 text-xs uppercase tracking-[0.08em] text-foreground-muted sm:flex"
          >
            <span className="h-8 w-px animate-pulse bg-gradient-to-b from-brand-blue to-transparent" />
            Découvrir
          </motion.div>
        </Container>
      </motion.div>

      <FloatingProofCards />
    </section>
  );
}
