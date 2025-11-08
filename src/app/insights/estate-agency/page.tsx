import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArticleHeader } from '@/components/sections/article-header';
import { ArticleContent } from '@/components/sections/article-content';

export const metadata = {
  title: 'Estate Agency Services | Propertywise Tanzania',
  description: 'Explore Propertywise (T) Limited’s full-spectrum estate agency services, from valuations and marketing to tailored selling and buying support across Tanzania.',
  keywords: 'estate agency Tanzania, Propertywise real estate, property marketing, buying property, selling property'
};

export default function EstateAgencyPage() {
  const articleData = {
    title: 'Estate Agency Expertise for Commercial, Residential & Tourism Assets',
    subtitle: 'Blending people-first service with technology-led marketing to secure the right deal faster',
    category: 'Estate Services',
    readTime: '7 min read',
    publishDate: '2024-01-11',
    author: 'Propertywise Team'
  };

  return (
    <>
      <Navbar />
      <main>
        <ArticleHeader {...articleData} />
        <ArticleContent>
          <h2>Why Work with Propertywise Estate Agents?</h2>

          <p>Propertywise (T) Limited is a specialist real estate company built on decades of experience in valuation, property management, marketing, sales, and leasing. We maintain an extensive database of active buyers, sellers, tenants, and landlords, enabling us to match people with the right property quickly and confidently.</p>

          <p>From commercial towers and residential estates to tourism assets, we understand how to maximise value in markets known for strong yields and long-term growth.</p>

          <h2>Our Real Estate Agency Expertise</h2>

          <p>The property industry is evolving rapidly. While real estate remains a people business, technology now powers secure, streamlined transactions. Propertywise embraces paperless workflows, web-based transaction management, and national-to-global marketing reach so every listing benefits from modern exposure.</p>

          <ul>
            <li>Customer-first ethos guided by attentive listening and proactive communication.</li>
            <li>Processes designed to move at the pace clients expect without compromising diligence.</li>
            <li>Experienced negotiators who treat every move as a win-win outcome.</li>
          </ul>

          <blockquote>
            <p>Choosing who represents you is the most important decision you make when buying or selling property. We honour that trust on every mandate.</p>
          </blockquote>

          <h2>Real Estate is Our Business</h2>

          <p>We possess deep market intelligence across Dar es Salaam plus key cities such as Mwanza, Arusha, Mbeya, Mtwara, and Zanzibar. Our diverse portfolio means we can source or market:</p>

          <ul>
            <li>Retail and office properties</li>
            <li>Industrial buildings</li>
            <li>Hotels and motels</li>
            <li>Boutique lodges and tourism assets</li>
          </ul>

          <h2>Selling Your Property</h2>

          <p>Whether you are exiting discreetly or driving competitive bids, we guide you through every stage:</p>

          <ul>
            <li>Valuation and pricing strategy grounded in current demand.</li>
            <li>Marketing campaigns that amplify visibility to vetted buyers.</li>
            <li>Negotiation and due diligence management until the deal closes confidentially.</li>
          </ul>

          <p>Selling is a full-time endeavour requiring persistence, patience, and emotional distance. Propertywise provides the skill set, experience, and detachment required to keep momentum without discounting value.</p>

          <h2>Buying a Property</h2>

          <p>We maintain countrywide connections and curated inventories so buyers can explore serious opportunities fast.</p>

          <ul>
            <li>Discovery workshops to understand dream homes, long-term investments, or income-generating assets.</li>
            <li>Guidance through financing considerations, regulatory steps, and risk assessment.</li>
            <li>Transaction navigation that highlights red flags before they become costly mistakes.</li>
          </ul>

          <h2>What Makes Us Different from Street Agents</h2>

          <ul>
            <li><strong>Professional training:</strong> our agents pair valuation expertise with advisory insight so you receive accurate market value, not speculation.</li>
            <li><strong>Regulatory fluency:</strong> we work within the Land Act No. 4 of 1999, Land Registration Ordinance, Town and Country Planning Act, and related regulations.</li>
            <li><strong>Client-first mandate:</strong> exclusivity ensures we focus on securing the best market price rather than chasing quick commissions.</li>
            <li><strong>Verified credentials:</strong> our professionals are recognisable through bodies such as TIVEA and NCPS, helping you vet who represents you.</li>
          </ul>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 my-10">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Promise</h3>
            <ul className="list-disc pl-6 text-blue-900 space-y-1">
              <li>Access to every property on the market, even if we do not hold the listing.</li>
              <li>Support to secure the lowest feasible purchase price or the most favourable selling terms.</li>
              <li>Independent, unbiased advice rooted in data and experience.</li>
              <li>Relentless effort to save you time, money, and stress.</li>
            </ul>
          </div>

          <p className="text-center text-lg font-medium text-gray-900">
            Need an estate agent who blends technology, market insight, and personal service?{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700">
              Contact Propertywise
            </a>{' '}
            to start the conversation.
          </p>
        </ArticleContent>
      </main>
      <Footer />
    </>
  );
}
