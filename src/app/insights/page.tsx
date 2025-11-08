import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BlogHero } from '@/components/sections/blog-hero';
import { BlogGrid } from '@/components/sections/blog-grid';

export const metadata = {
  title: 'Property Insights & Expert Advice | Propertywise Tanzania',
  description: 'Expert insights on Tanzania real estate market, property buying guides, selling tips, and professional real estate advice from Propertywise Limited.',
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}