'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function ConsultancyServices() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const consultancyServices = [
    {
      title: "Valuation Services",
      description: "Professional property valuation services for various purposes including mortgage, insurance, taxation, and investment analysis.",
      details: [
        "Mortgage valuations for lending institutions",
        "Market value assessments for sale/purchase decisions",
        "Insurance valuations for coverage determination",
        "Taxation valuations for government assessments"
      ]
    },
    {
      title: "Land Administration",
      description: "Comprehensive land management and administrative services to ensure proper land governance and utilization.",
      details: [
        "Land registration and title processing",
        "Boundary surveys and demarcation",
        "Land use compliance monitoring",
        "Land records management and digitization"
      ]
    },
    {
      title: "Land Use Management Plan",
      description: "Strategic planning services for optimal land utilization and sustainable development across various property types.",
      details: [
        "Zoning analysis and compliance assessments",
        "Development feasibility studies",
        "Environmental impact considerations",
        "Community engagement and stakeholder consultation"
      ]
    },
    {
      title: "Asset Register Formulation",
      description: "Systematic documentation and cataloging of property assets for effective management and tracking.",
      details: [
        "Complete asset inventory and documentation",
        "Digital asset register creation",
        "Asset condition assessments",
        "Maintenance scheduling and tracking systems"
      ]
    },
    {
      title: "Asset Management",
      description: "Strategic management of property portfolios to maximize value and optimize performance over time.",
      details: [
        "Portfolio performance analysis",
        "Strategic asset planning and optimization",
        "Risk assessment and mitigation strategies",
        "Asset lifecycle management"
      ]
    },
    {
      title: "Property Management",
      description: "Day-to-day operational management of properties ensuring optimal performance and tenant satisfaction.",
      details: [
        "Tenant relations and lease management",
        "Maintenance and repairs coordination",
        "Financial management and reporting",
        "Compliance with regulations and standards"
      ]
    },
    {
      title: "Estate Agency",
      description: "Professional real estate brokerage services facilitating property transactions for buyers and sellers.",
      details: [
        "Property marketing and sales representation",
        "Buyer and seller advisory services",
        "Market analysis and pricing strategies",
        "Transaction coordination and closing support"
      ]
    },
    {
      title: "Project Development",
      description: "End-to-end project development services from conception to completion of real estate projects.",
      details: [
        "Project feasibility and planning",
        "Design coordination and oversight",
        "Construction management and supervision",
        "Quality control and delivery"
      ]
    },
    {
      title: "Property Development",
      description: "Comprehensive property development services including site selection, planning, and construction management.",
      details: [
        "Site acquisition and due diligence",
        "Development planning and permitting",
        "Construction oversight and management",
        "Marketing and sales coordination"
      ]
    },
    {
      title: "Property Investments",
      description: "Investment advisory services helping clients make informed property investment decisions.",
      details: [
        "Investment opportunity analysis",
        "Market research and trend analysis",
        "Portfolio diversification strategies",
        "Return on investment calculations"
      ]
    },
    {
      title: "Mortgage Brokerage",
      description: "Mortgage brokerage services connecting clients with appropriate lending solutions for property financing.",
      details: [
        "Lender comparison and selection",
        "Application processing and documentation",
        "Interest rate negotiation",
        "Closing coordination and support"
      ]
    }
  ];


  return (
    <section id="consultancy-services" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Consultancy Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive consultancy services cover every aspect of real estate,
            from valuation and management to development and investment advisory.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultancyServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                    aria-label="Toggle details"
                  >
                    {expandedService === index ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {expandedService === index && (
                  <div className="space-y-4 border-t border-gray-100 pt-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        Key Services Include:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
                      <a
                        href="#quote"
                        className="inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors"
                      >
                        Request consultation
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      {service.title === "Valuation Services" && (
                        <a
                          href="/insights/real-estate-agency-expertise"
                          className="inline-flex items-center justify-center text-sm text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg transition-colors"
                        >
                          Learn more about our expertise
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {expandedService !== index && (
                  <div className="mt-4">
                    <button
                      onClick={() => setExpandedService(index)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View details →
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Our consultancy services can be tailored to meet your specific requirements.
              Contact us to discuss how we can help with your unique property needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}