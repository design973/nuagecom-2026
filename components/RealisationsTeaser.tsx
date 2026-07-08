import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

export function RealisationsTeaser() {
  return (
    <section id="realisations" className="bg-background py-section lg:py-section-lg">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading kicker="Réalisations" title="Des marques qu'on a aidées à s'élever" />
          <Button href="/realisations" variant="tertiary" showArrow className="shrink-0">
            Voir toutes nos réalisations
          </Button>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {/* Projet principal — grand format */}
          <Link href="/realisations/projet-principal" className="group block">
            <Card hoverable className="overflow-hidden p-0 sm:p-0">
              {/* TODO: visuel réel du projet */}
              <div className="aspect-[21/9] w-full bg-background-secondary" />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.06em] text-foreground-muted">
                  <span>Client à définir</span>
                  <span aria-hidden="true">·</span>
                  <span>Web &amp; Identité visuelle</span>
                  <span aria-hidden="true">·</span>
                  <span>2025</span>
                </div>
                <p className="mt-4 font-mono text-3xl font-semibold text-brand-blue">+45% de trafic</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Voir l&apos;étude de cas
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Card>
          </Link>

          {/* Projet secondaire */}
          <Link href="/realisations/projet-secondaire" className="group block">
            <Card hoverable className="grid gap-6 md:grid-cols-2 md:items-center">
              {/* TODO: visuel réel du projet */}
              <div className="aspect-[16/10] rounded-card bg-background" />
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.06em] text-foreground-muted">
                  <span>Client à définir</span>
                  <span aria-hidden="true">·</span>
                  <span>Communication institutionnelle</span>
                  <span aria-hidden="true">·</span>
                  <span>2024</span>
                </div>
                <p className="mt-4 text-lg font-medium text-foreground">Refonte complète de l&apos;identité</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Voir l&apos;étude de cas
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Card>
          </Link>
        </div>
      </Container>
    </section>
  );
}
