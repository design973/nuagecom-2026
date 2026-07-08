import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PresentationSection } from '@/components/PresentationSection';
import { ExpertisesTeaser } from '@/components/ExpertisesTeaser';
import { MethodSection } from '@/components/MethodSection';
import { RealisationsTeaser } from '@/components/RealisationsTeaser';
import { ConfianceSection } from '@/components/ConfianceSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactTeaser } from '@/components/ContactTeaser';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <PresentationSection />
      <ExpertisesTeaser />
      <MethodSection />
      <RealisationsTeaser />
      <ConfianceSection />
      <FAQSection />
      <ContactTeaser />
      <Footer />
    </main>
  );
}
