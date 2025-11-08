export function OtherServices() {
  const otherServices = [
    {
      title: "Litigation Support Services",
      description: "Professional valuation and expert witness services for legal proceedings and disputes.",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "Expert witness testimony in property disputes",
        "Litigation support valuations and assessments",
        "Property damage assessments for insurance claims",
        "Forensic property analysis and reporting"
      ]
    },
    {
      title: "Due Diligence",
      description: "Comprehensive property assessments and risk analysis for informed decision-making.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      features: [
        "Comprehensive property inspections and assessments",
        "Legal and regulatory compliance verification",
        "Environmental and structural risk analysis",
        "Market analysis and investment viability studies"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Additional Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Specialized services to support your property transactions and legal requirements.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Key Features:
                </h4>
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#quote"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Learn more about {service.title.toLowerCase()}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}