import { SectionHeading } from './SectionHeading';
import { Container } from './Container';
import { Accordion } from './ui/Accordion';

const FAQ_ITEMS = [
  {
    id: 'delais',
    question: 'Quels sont vos délais habituels ?',
    answer: 'Ils varient selon la nature du projet ; nous les cadrons ensemble dès le premier échange.',
  },
  {
    id: 'zone',
    question: 'Travaillez-vous avec des clients hors Guyane ?',
    answer: 'Notre ancrage est en Guyane, mais nous accompagnons aussi des structures basées ailleurs.',
  },
  {
    id: 'budget',
    question: 'Quel budget prévoir ?',
    answer: 'Cela dépend du périmètre du projet ; nous établissons un devis après un premier échange.',
  },
  {
    id: 'suivi',
    question: 'Proposez-vous un accompagnement après livraison ?',
    answer: 'Oui, un suivi et une optimisation continue font partie de notre méthode.',
  },
  {
    id: 'collectivites',
    question: 'Travaillez-vous avec les collectivités et institutions ?',
    answer: 'Oui, aux côtés des entreprises, nous accompagnons régulièrement des collectivités et institutions.',
  },
  {
    id: 'ia',
    question: "Comment intégrez-vous l'intelligence artificielle ?",
    answer: 'De façon sobre et concrète, jamais comme un simple argument marketing.',
  },
];

export function FAQSection() {
  return (
    <section className="bg-background py-section lg:py-section-lg">
      <Container className="max-w-3xl">
        <SectionHeading kicker="FAQ" title="Vos questions, nos réponses" align="center" />
        <Accordion items={FAQ_ITEMS} className="mt-12" />
      </Container>
    </section>
  );
}
