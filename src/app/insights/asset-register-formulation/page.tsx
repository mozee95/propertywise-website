import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArticleHeader } from '@/components/sections/article-header';
import { ArticleContent } from '@/components/sections/article-content';

export const metadata = {
  title: 'Asset Register Formulation Services | Propertywise Tanzania',
  description: 'Learn how Propertywise (T) Limited verifies, tags, codifies, and maintains enterprise asset registers with robust quality assurance and ongoing governance.',
  keywords: 'Asset register formulation, physical asset verification, asset tagging Tanzania, fixed asset register, Propertywise asset management'
};

export default function AssetRegisterFormulationPage() {
  const articleData = {
    title: 'Asset Register Formulation & Fixed Asset Governance',
    subtitle: 'Physical verification, barcode tagging, reconciliation, and systems integration for transparent asset control',
    category: 'Asset Management',
    readTime: '9 min read',
    publishDate: '2024-01-18',
    author: 'Propertywise Team'
  };

  return (
    <>
      <Navbar />
      <main>
        <ArticleHeader {...articleData} />
        <ArticleContent>
          <h2>Physical Assets Verification, Codification & Register Establishment</h2>

          <p>Propertywise (T) Limited provides end-to-end asset register formulation so your organisation can trust every figure on the balance sheet. Our multidisciplinary team blends surveying expertise, software automation, and financial reporting knowledge to produce a tamper-proof fixed asset register that stands up to audits and supports strategic decision making.</p>

          <p>Whether you manage a nationwide branch network or a single headquarters, we align with your policies, deploy trained field teams, and leave behind a living framework for continuous verification.</p>

          <h2>What We Deliver</h2>

          <p>Our mandate extends beyond a simple stocktake. We partner with your finance, audit, and operations teams to:</p>

          <ul>
            <li>Carry out comprehensive physical verification of all assets across every site.</li>
            <li>Tag assets with durable barcode labels for future traceability.</li>
            <li>Capture inventories per site in line with your classification guidelines.</li>
            <li>Reconcile historical registers with verified and tagged assets.</li>
            <li>Compile a new, audit-ready fixed asset register.</li>
            <li>Upload or integrate the register into your existing accounting system.</li>
            <li>Design policies that sustain continuous verification, tagging, and register updates.</li>
          </ul>

          <h2>Phase 1: Physical Verification & Tagging</h2>

          <p>We begin onsite, working through every department with predefined checklists, location maps, and access protocols approved by your management.</p>

          <ul>
            <li>Confirm existence, condition, and utilisation status of each asset.</li>
            <li>Apply permanent barcode labels that align with your coding structure.</li>
            <li>Capture baseline details that feed into the digital inventory.</li>
          </ul>

          <h2>Phase 2: Creation of Assets Inventory</h2>

          <p>Using handheld scanners and our asset capture software, we digitise the verified data immediately, eliminating transcription errors. The software supports custom fields so we can mirror your internal taxonomy.</p>

          <p>Key data points include:</p>

          <ul>
            <li>Barcode number, asset description, and any legacy ID still in use.</li>
            <li>Precise location hierarchy—site, building, floor, and room.</li>
            <li>Asset class, subclass, and reporting unit (department, division, cost centre).</li>
            <li>Manufacturer details such as model, serial number, size, or capacity.</li>
            <li>Supplementary information (images, custody notes, acquisition references) tailored to your specifications.</li>
          </ul>

          <h2>Phase 3: Reconciliation & Register Compilation</h2>

          <p>After fieldwork, we reconcile the verified inventory against your legacy fixed asset register (FAR) and produce actionable exception reports:</p>

          <ul>
            <li>Assets in the FAR that were verified and tagged.</li>
            <li>Assets in the FAR that could not be located.</li>
            <li>Assets found but classified as obsolete, damaged, or awaiting disposal.</li>
            <li>Assets discovered onsite that were missing from the FAR.</li>
          </ul>

          <p>Each exception category is reviewed with your appointed managers so ownership, valuation, impairment, or disposal decisions are documented. Once all items are resolved, we issue the refreshed fixed asset register.</p>

          <h2>Phase 4: Systems Integration</h2>

          <p>Our software specialists align the final register with the import format required by your accounting or ERP platform. Working alongside your finance team, we upload the data, verify balances, and confirm audit trails are preserved.</p>

          <h2>Phase 5: Continuous Asset Management Procedures</h2>

          <p>To keep the register accurate, we help you institutionalise policies covering:</p>

          <ul>
            <li>Tagging protocols for all new acquisitions.</li>
            <li>Movement tracking for relocations, redeployments, or spare parts.</li>
            <li>Disposal authorisation, retirement, and write-off documentation.</li>
            <li>Routine FAR updates that mirror accounting entries.</li>
            <li>Scheduled verification and audit cycles.</li>
          </ul>

          <p>The documented procedures are handed over to your internal asset managers so the system remains self-sustaining.</p>

          <h2>Quality Assurance</h2>

          <p>Every engagement is governed by a project plan with explicit deliverables and acceptance criteria. Our QA approach includes:</p>

          <ul>
            <li>Kick-off alignment on scope, timelines, and reporting cadence.</li>
            <li>Location sign-off forms, asset inventory sign-off sheets, and evaluation forms monitored in real time.</li>
            <li>Dedicated asset managers on your side to countercheck our work and escalate queries instantly.</li>
            <li>A single Propertywise project manager who liaises with your appointed counterpart on daily progress and issues.</li>
          </ul>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 my-10">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Why Partner with Propertywise?</h3>
            <p className="text-blue-800 mb-4">We combine valuation expertise, regulatory familiarity, and technology-driven execution to deliver registers that satisfy auditors and equip management with accurate intelligence.</p>
            <ul className="list-disc pl-6 text-blue-900 space-y-1">
              <li>Specialised teams for verification, data capture, and systems integration.</li>
              <li>Barcode-driven workflows that minimise manual intervention.</li>
              <li>Actionable insights for underutilised, obsolete, or missing assets.</li>
            </ul>
          </div>

          <p className="text-center text-lg font-medium text-gray-900">
            Ready to modernise your asset governance?{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700">
              Contact Propertywise today
            </a>{' '}
            to schedule an assessment.
          </p>
        </ArticleContent>
      </main>
      <Footer />
    </>
  );
}
