import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArticleHeader } from '@/components/sections/article-header';
import { ArticleContent } from '@/components/sections/article-content';

export const metadata = {
  title: 'Property Management Services | Propertywise Tanzania',
  description: 'See how Propertywise (T) Limited delivers full-service residential and commercial property management, from tenant screening to financial reporting.',
  keywords: 'property management Tanzania, rental management, tenant screening, Propertywise property managers'
};

export default function PropertyManagementPage() {
  const articleData = {
    title: 'Comprehensive Property Management for Owners & Tenants',
    subtitle: 'Hands-on lease administration, maintenance oversight, and tenant services that protect your investment 24/7',
    category: 'Property Management',
    readTime: '10 min read',
    publishDate: '2024-01-14',
    author: 'Propertywise Team'
  };

  return (
    <>
      <Navbar />
      <main>
        <ArticleHeader {...articleData} />
        <ArticleContent>
          <h2>Why Partner with Propertywise Property Managers?</h2>

          <p>Rental property can effortlessly fund a mortgage, but self-managing repairs, tenant turnover, and compliance is rarely anyone’s passion. Propertywise (T) Limited removes that burden with an experienced property management team serving residential, office, and mixed-use portfolios across Tanzania for owners living locally or abroad.</p>

          <p>We combine honest communication with proactive building oversight so you can maximise income, retain happy tenants, and keep your asset in peak condition without daily firefighting.</p>

          <h2>Value for Owners & Tenants</h2>

          <p>Owners trust us to maximise returns and protect the asset. Tenants rely on us for responsive service and clear expectations. Our managers deliver both sides by:</p>

          <ul>
            <li>Maintaining strong vendor relationships for fast, affordable repairs.</li>
            <li>Screening and selecting residents carefully to reduce arrears and damage risk.</li>
            <li>Keeping detailed records so rent, fees, and maintenance decisions are fully transparent.</li>
          </ul>

          <h2>Core Services for Landlords</h2>

          <h3>Evaluating & Positioning Your Property</h3>

          <ul>
            <li>Advise on optimal market rent based on location, features, and condition.</li>
            <li>Source competitive bids for improvements from licensed contractors.</li>
            <li>Recommend value-adding tweaks to boost appeal and occupancy.</li>
          </ul>

          <h3>Tenant Screening</h3>

          <p>Comprehensive screening underpins financial security. We verify:</p>

          <ul>
            <li>Credit history and payment patterns.</li>
            <li>Rental references.</li>
            <li>Employment and income.</li>
            <li>Immigration status.</li>
          </ul>

          <h3>Preparing Lease Agreements</h3>

          <p>We use Land Regulations-aligned leases (typically 12–24 months) with renewal options. Owners can specify pet policies, utilities, landscaping expectations, and other clauses, while we enforce compliance consistently.</p>

          <h3>Rent Collection & Late Fees</h3>

          <p>Rent is processed immediately, with proceeds and statements issued within 48 hours. We do not hold funds awaiting cheque clearance; NSF cases are pursued directly with the tenant. Late fees trigger after five days, and warrants are filed if arrears reach the 15th of the month.</p>

          <h3>Repairs & Maintenance</h3>

          <ul>
            <li>Dedicated rental coordinators manage all service requests.</li>
            <li>24/7 emergency contacts ensure issues are handled promptly.</li>
            <li>Insured and bonded vendors deliver quality work at competitive prices.</li>
          </ul>

          <h3>Inspections</h3>

          <ul>
            <li>Biannual property inspections with photos and detailed notes.</li>
            <li>Move-in walkthroughs to document existing condition.</li>
            <li>Move-out reports matched against move-in records for clear accountability.</li>
          </ul>

          <h3>Advertising & Leasing</h3>

          <ul>
            <li>Professional signage, directional boards, and digital listings (including the Propertywise website).</li>
            <li>Placement in national, local, and corporate rental channels.</li>
            <li>Targeted print and mailer campaigns when required.</li>
          </ul>

          <h3>Financial Reporting</h3>

          <p>Owners receive monthly itemised statements covering rent collected, expenses, and owner draws, plus year-end summaries ready for tax filing.</p>

          <h3>Management Fees</h3>

          <ul>
            <li>Procurement fee tied to advertising, showings, onboarding, and screening.</li>
            <li>Monthly management fee calculated as a percentage of gross rent.</li>
            <li>All fees invoiced with full transparency and tax documentation.</li>
          </ul>

          <h2>Service Experience for Tenants</h2>

          <h3>Viewing & Application Support</h3>

          <p>Once a tenant shortlists properties, our managers schedule showings, accompany them onsite, and answer every question. Applications move quickly because we cannot hold properties off the market; tenants provide complete forms, income proof, landlord contacts, and identification to keep the process moving.</p>

          <h3>Security Deposits & Rent</h3>

          <ul>
            <li>Security deposits are due at lease signing via bank cheque or cash.</li>
            <li>Rent is payable on the first of each month to Propertywise (T) Limited.</li>
            <li>A five-day grace period applies before late fees are assessed.</li>
          </ul>

          <h2>Commercial Property Expertise</h2>

          <p>Beyond residential rentals, we manage commercial buildings for private and corporate owners, focusing on:</p>

          <ul>
            <li>Lease negotiation and compliance.</li>
            <li>Programmed building maintenance and service contracts.</li>
            <li>Operating cost optimisation and service charge reconciliation.</li>
            <li>Comprehensive database management of financial, lease, and physical data.</li>
            <li>Full compliance with Tanzanian Land Acts and related regulations.</li>
          </ul>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 my-10">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Your Benefits at a Glance</h3>
            <ul className="list-disc pl-6 text-blue-900 space-y-1">
              <li>Hands-off income with professional oversight.</li>
              <li>Higher tenant retention through responsive service.</li>
              <li>Audit-ready financials and documentation.</li>
              <li>Strategic advice that maximises capital growth.</li>
            </ul>
          </div>

          <p className="text-center text-lg font-medium text-gray-900">
            Ready to hand over the hassles of managing tenants and maintenance?{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700">
              Talk to Propertywise today
            </a>{' '}
            to get a tailored property management proposal.
          </p>
        </ArticleContent>
      </main>
      <Footer />
    </>
  );
}
