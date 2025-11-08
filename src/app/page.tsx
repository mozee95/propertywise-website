import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { InsightsCarousel } from '@/components/sections/insights-carousel';
import { Services } from '@/components/sections/services';
import { PainPoints } from '@/components/sections/pain-points';
import { Solutions } from '@/components/sections/solutions';
import { Process } from '@/components/sections/process';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { FinalCTA } from '@/components/sections/final-cta';
import { BookConsultation } from '@/components/sections/book-consultation';
import { Portfolio } from '@/components/sections/portfolio';

export default function HomePage() {
  return (
    <main className="bg-[var(--pw-bg)] text-[var(--pw-fg)]">
      <Navbar />
      <Hero />
      <TrustedBy />
      <InsightsCarousel />
      {/* <Services /> */}
      {/* <PainPoints />
      <Solutions /> */}
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      {/* <FinalCTA /> */}
      <BookConsultation />
      <Footer />
    </main>
  );
}
