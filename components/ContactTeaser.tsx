import { Container } from './Container';
import { Button } from './ui/Button';

// TODO: remplacer par l'URL Calendly définitive de Nuagecom
const CALENDLY_URL = 'https://calendly.com/nuagecom/echange-30-minutes';

export function ContactTeaser() {
  return (
    <section id="contact" className="bg-background py-section lg:py-section-lg">
      <Container
        className="flex flex-col items-center rounded-card-lg border border-border bg-background-secondary px-6 py-16 text-center sm:px-16"
      >
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Parlons de votre projet.</h2>
        <p className="mt-4 max-w-md text-base text-foreground-muted">
          Échangeons ensemble pendant 30 minutes. Sans engagement.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href={CALENDLY_URL} external variant="secondary" size="lg">
            Réserver un échange
          </Button>
          <Button href="/contact" variant="primary" size="lg">
            Aller au formulaire complet
          </Button>
        </div>
      </Container>
    </section>
  );
}
