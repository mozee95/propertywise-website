import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ServicesHero } from '@/components/sections/services-hero';
import { ConsultancyServices } from '@/components/sections/consultancy-services';
import { OtherServices } from '@/components/sections/other-services';
import { ServicesCTA } from '@/components/sections/services-cta';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ConsultancyServices />
        <OtherServices />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}