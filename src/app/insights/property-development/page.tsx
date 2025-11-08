import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArticleHeader } from '@/components/sections/article-header';
import { ArticleContent } from '@/components/sections/article-content';

export const metadata = {
  title: 'Property Development Consultancy | Propertywise Tanzania',
  description: 'Learn how Propertywise (T) Limited guides investors through concept, financing, approvals, and construction to unlock developer-level returns.',
  keywords: 'property development Tanzania, armchair developer, development consultancy, project management, investment property'
};

export default function PropertyDevelopmentPage() {
  const articleData = {
    title: 'Property Development Consultancy & Armchair Developer Program',
    subtitle: 'From site selection to marketing, we manage every phase while you retain ownership and profits',
    category: 'Development',
    readTime: '8 min read',
    publishDate: '2024-01-09',
    author: 'Propertywise Team'
  };

  return (
    <>
      <Navbar />
      <main>
        <ArticleHeader {...articleData} />
        <ArticleContent>
          <h2>Unlock Developer-Level Returns</h2>

          <p>If you are ready to boost investment performance through ground-up development or major upgrades, Propertywise (T) Limited is Tanzania’s premier partner. We remove the day-to-day worries, allowing you to step into the role of “armchair developer” while still controlling the title and ultimate profits.</p>

          <p>Instead of buying at retail and waiting for appreciation, we help you secure opportunities at wholesale pricing, lock in immediate equity, and fast-track portfolio growth.</p>

          <h2>Why Become a Property Developer?</h2>

          <ul>
            <li>Deliver projects up to 20% below market value, preserving capital.</li>
            <li>Capture sizeable development profits upon completion or sale.</li>
            <li>Boost rental yields that better service mortgages.</li>
            <li>Access easier finance thanks to improved valuations post-build.</li>
            <li>Leverage favourable tax treatment on new assets.</li>
            <li>Accelerate long-term portfolio expansion through recycling equity.</li>
          </ul>

          <p>With Propertywise orchestrating every discipline, you enjoy professional project management without needing to be onsite.</p>

          <h2>Our Integrated Development Services</h2>

          <p>We cover the full lifecycle so you can proceed with confidence:</p>

          <ul>
            <li><strong>Site Search & Feasibility:</strong> identify viable locations, run pre-purchase studies, and clarify risk before committing.</li>
            <li><strong>Planning & Approvals:</strong> evaluate zoning, prepare submissions, and navigate town planning approvals, surveying, and subdivision.</li>
            <li><strong>Finance Procurement:</strong> engage leading banks and mortgage brokers to structure competitive funding.</li>
            <li><strong>Design Management:</strong> coordinate architects to create market-ready concepts that are economical to build.</li>
            <li><strong>Cost Verification:</strong> provide comprehensive design-and-cost assessments for your independent review.</li>
            <li><strong>Construction Administration:</strong> oversee contractors to maintain timelines, budgets, and quality standards.</li>
            <li><strong>Joint Venture Structuring:</strong> source partners when co-investment unlocks superior leverage.</li>
            <li><strong>Marketing Coordination:</strong> leverage our agent network to sell or lease finished assets at top market prices.</li>
          </ul>

          <h2>Concept-to-Completion Project Management</h2>

          <p>Propertywise organises every moving part yet keeps you in control. We provide transparent reporting, milestone sign-offs, and hands-on governance so you always know how the project is tracking.</p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 my-10">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-3">What You Gain</h3>
            <ul className="list-disc pl-6 text-indigo-900 space-y-1">
              <li>Single point of accountability across consultants, contractors, and financiers.</li>
              <li>Objective feasibility metrics before capital is deployed.</li>
              <li>Professional negotiation on costs, contracts, and timelines.</li>
              <li>Confidence that compliance and approvals are handled by experts.</li>
            </ul>
          </div>

          <p className="text-center text-lg font-medium text-gray-900">
            Ready to launch your next development without the stress?{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700">
              Speak with Propertywise
            </a>{' '}
            about our Property Developer Program.
          </p>
        </ArticleContent>
      </main>
      <Footer />
    </>
  );
}
