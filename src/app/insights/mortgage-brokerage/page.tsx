import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArticleHeader } from '@/components/sections/article-header';
import { ArticleContent } from '@/components/sections/article-content';

export const metadata = {
  title: 'Mortgage Brokerage Services | Propertywise Tanzania',
  description: 'Discover how Propertywise (T) Limited secures tailored mortgage financing for residential buyers, builders, and commercial investors nationwide.',
  keywords: 'mortgage brokerage Tanzania, Propertywise mortgage, loan sourcing, commercial financing'
};

export default function MortgageBrokeragePage() {
  const articleData = {
    title: 'Mortgage Brokerage for Residential & Commercial Real Estate',
    subtitle: 'One application, nationwide lender access, and expert guidance on rates, terms, and approvals',
    category: 'Financing',
    readTime: '7 min read',
    publishDate: '2024-01-07',
    author: 'Propertywise Team'
  };

  return (
    <>
      <Navbar />
      <main>
        <ArticleHeader {...articleData} />
        <ArticleContent>
          <h2>The Challenge of Finding the Right Mortgage</h2>

          <p>The modern mortgage market offers incredible choice, but navigating it alone can be exhausting. While you decode financial jargon, a competing buyer could close on your dream property. Propertywise (T) Limited removes that stress by sourcing loans that match your requirements, budget, and timeline.</p>

          <h2>Propertywise Mortgage Brokerage at a Glance</h2>

          <p>We arrange financing for multimillion-dollar commercial transactions and support residential buyers across Tanzania. Our motivated team collaborates with real estate professionals, builders, and individual buyers, tapping a broad network of lenders to secure:</p>

          <ul>
            <li>Competitive interest rates and flexible terms.</li>
            <li>Loan structures tailored to complex income or investment strategies.</li>
            <li>Streamlined approvals for both commercial and residential deals.</li>
          </ul>

          <p>As we expand, we continue to attract seasoned brokers and strengthen our position as the intermediary of choice for discerning clients.</p>

          <h2>Benefits of Using Propertywise as Your Broker</h2>

          <p>Going lender-to-lender is time-consuming and repetitive. Each application demands new paperwork, and comparing offers becomes a full-time job. With Propertywise:</p>

          <ul>
            <li>You submit a single application, dramatically reducing admin.</li>
            <li>We source quotes from multiple lenders and present the best-value options.</li>
            <li>Our service is free to you; we handle the negotiation and paperwork heavy lifting.</li>
          </ul>

          <p>Because we already maintain strong relationships with banks and specialised lenders, we know who caters to unique circumstances—whether that means complex income, limited credit history, or urgent timelines.</p>

          <h2>Support for Challenging Profiles</h2>

          <p>Applicants with blemished credit often endure a cycle of rejections, which can further damage their records. We shortcut that process by approaching lenders who are open to your profile from the start, protecting your credit and saving valuable time.</p>

          <h2>Why Brokers Make Sense</h2>

          <ul>
            <li>Access to wholesale and niche mortgage products not always advertised publicly.</li>
            <li>Insight into lender appetite, underwriting criteria, and turnaround times.</li>
            <li>Objective comparisons of interest rates, fees, and long-term costs.</li>
            <li>Guidance that keeps your transaction moving while you focus on securing the property.</li>
          </ul>

          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 my-10">
            <h3 className="text-2xl font-semibold text-teal-900 mb-3">What You Can Expect</h3>
            <ul className="list-disc pl-6 text-teal-900 space-y-1">
              <li>Dedicated mortgage specialists who understand real estate transactions.</li>
              <li>Access to banks, non-bank lenders, and private capital.</li>
              <li>Clear explanations of every option so you can decide with confidence.</li>
            </ul>
          </div>

          <p className="text-center text-lg font-medium text-gray-900">
            Need financing without the paperwork marathon?{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700">
              Contact Propertywise Mortgage Brokerage
            </a>{' '}
            to start your application.
          </p>
        </ArticleContent>
      </main>
      <Footer />
    </>
  );
}
