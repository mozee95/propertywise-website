import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArticleHeader } from '@/components/sections/article-header';
import { ArticleContent } from '@/components/sections/article-content';

export const metadata = {
  title: 'Our Real Estate Agency Expertise | Propertywise Tanzania',
  description: 'Discover how Propertywise Limited combines cutting-edge technology with personalized service to lead Tanzania\'s real estate market transformation.',
  keywords: 'Tanzania real estate agency, property experts, professional estate agents, Dar es Salaam property, real estate technology'
};

export default function RealEstateExpertisePage() {
  const articleData = {
    title: "Our Real Estate Agency Expertise: Leading Tanzania's Property Market",
    subtitle: "How Propertywise Limited combines technology with personalized service to revolutionize real estate transactions",
    category: "Company Insight",
    readTime: "5 min read",
    publishDate: "2024-01-15",
    author: "Propertywise Team"
  };


  return (
    <>
      <Navbar />
      <main>
        <ArticleHeader {...articleData} />
        <ArticleContent>
          <h2>Embracing Change in Tanzania's Real Estate Landscape</h2>

          <p>The world we live in is changing, and so is the way customers buy and sell homes. Real estate will always be a people business, but technology will continue to play a greater role in the transaction.</p>

          <p>Large real estate firms in the country are slow to react and slow to change. "Paperless" transactions, web-based transaction management, and streamlined efficiencies are not only possible but are a reality today.</p>

          <p>Local, national and global exposure for our selling clients is as basic today. Economy of scale allows us not to react to an evolving way of delivering our service, but to <strong>lead</strong>.</p>

          <h2>Customer-Centric Approach</h2>

          <p>Most importantly, at Propertywise (T) Limited, <strong>the customer is always at the center of our business</strong>. We look forward to earning your business, and we assure you that we will never take that trust for granted.</p>

          <p>It takes knowledge, tenacity, attention to detail and a desire to win. We are better able to deliver superior, personalized service to our clients because we want every move to be a success.</p>

          <p>We really listen to your questions, concerns and requests.</p>

          <blockquote>
            <p>Of all the decisions you'll face when buying a home, there's none more important than the person you choose to represent you.</p>
          </blockquote>

          <h2>Real Estate is Our Business</h2>

          <p>Propertywise (T) Limited has extensive knowledge of the Dar es Salaam property markets in particular and in major cities of <strong>Mwanza, Arusha, Mbeya, Mtwara and Zanzibar</strong>.</p>

          <p>While we focus on listing key residential/commercial properties for sale and successfully link vendors with purchasers, the rest remain as details.</p>

          <p>Our range of real estate is varied, so we can cater to many different needs whether you are looking for:</p>

          <ul>
            <li>Retail/office property</li>
            <li>Industrial building</li>
            <li>Hotel/motel</li>
            <li>Boutique lodge</li>
          </ul>

          <h2>Our Comprehensive Services</h2>

          <h3>Selling Your Property</h3>

          <p>If you are an owner looking to sell your property, we can assist you through the process of selling a property and find you a qualified buyer.</p>

          <p>We can assist you to conclude a <strong>DEAL successfully – and confidentially</strong>.</p>

          <h4>Why Choose Us to Help Sell Your Property?</h4>

          <p>Selling a real estate property is a full-time endeavor that requires patience, perseverance and a level of detachment hardly provided by most Real Estate Agents in Tanzania.</p>

          <p>Unlike other business, real estate is a field that requires a unique skill-set and level of experience.</p>

          <p>We know how to sell a property and have the experience & expertise to help you successfully conclude a DEAL!</p>

          <p>Remember, unlike other commodities, not everyone can sell or buy a house at short notice.</p>

          <h3>Buying a Property</h3>

          <p>We have various landed properties and are well-connected countrywide. If you are serious about finding a property to buy, please contact us.</p>

          <p>We would be happy to discuss the opportunities with you. Let us know what you're looking for.</p>

          <h4>Why Choose Us to Help You Buy a Property?</h4>

          <p>Buying a real estate property for sale is not as straightforward an exercise as people may think. Buying a property is typically more involving and complex than other business transactions and most people are unfamiliar with the processes.</p>

          <p>This is where you decide on your dream home, lifetime property, investment property to cover your mortgage and the like!</p>

          <p>There are many potentially costly pitfalls to the process that a professional can assist you with.</p>

          <p>We will help navigate you through the transaction and advise you on the various risks and opportunities that can be involved with buying an existing property for sale.</p>

          <h2>Our Unique Advantage Over Street Agents</h2>

          <p>What sets Propertywise (T) Limited apart from ordinary street agents:</p>

          <div className="bg-blue-50 p-6 rounded-xl my-8">
            <h4 className="text-blue-900 font-semibold mb-3">Professional Training & Expertise</h4>
            <p className="text-blue-800">Ordinary street agents will give their perspective on what they are seeing, but they have no true professional training in that aspect. When you come to Propertywise (T) Limited, you will be killing two birds with one stone: professional advice as well as true market value of the property you want to sell or buy.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl my-8">
            <h4 className="text-green-900 font-semibold mb-3">Regulatory Knowledge</h4>
            <p className="text-green-800">We are versed with the real estate related regulatory framework in Tanzania, like the Land Act No. 4 of 1999, The Land Registration Ordinance, Town and Country Planning Act, etc. This expertise is rare or impossible when dealing with street agents.</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl my-8">
            <h4 className="text-purple-900 font-semibold mb-3">Client-First Approach</h4>
            <p className="text-purple-800">Street agents are willing to drop the price of the Seller's home more and faster than perhaps what a Seller may want. They don't want to wait. They want to get the commission. We always ask you for exclusivity (Sole mandate) so that you get the best possible market price of your property. We believe in a win-win situation.</p>
          </div>

          <h2>Professional Credentials Matter</h2>

          <p>Many buyers have a very difficult time trying to find a knowledgeable Real Estate Agent with experience in the field. It is very hard going through all agents and deciding the best one to choose from in a particular situation.</p>

          <p>No matter what type of property you are trying to sell or buy, you may verify your agent from the list of:</p>

          <ul>
            <li><strong>Tanzania Institute of Valuers and Estate Agents (TIVEA)</strong></li>
            <li><strong>National Council of Professional Surveyors (NCPS)</strong></li>
          </ul>

          <h2>Our Promise to You</h2>

          <div className="bg-gray-50 p-8 rounded-xl text-center my-8">
            <p className="text-lg font-medium text-gray-900 mb-4">We may not have properties for sale, but we have access to every property on the market.</p>

            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                We help you pay the minimum price required to secure your property
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                We save you time, money and stress
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                We work for you!
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                We scour the markets to find investment property to suit your needs
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                We provide independent and unbiased property advice
              </li>
            </ul>
          </div>

          <p className="text-center text-lg font-medium text-gray-900">Ready to experience the Propertywise difference? <a href="#contact" className="text-blue-600 hover:text-blue-700">Contact us today</a> to discuss your property needs.</p>
        </ArticleContent>
      </main>
      <Footer />
    </>
  );
}