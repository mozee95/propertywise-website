export function ServicesHero() {
  return (
    <section className="relative pt-24 pb-16">
      <div className="absolute inset-0">
        <img
          src="/services.jpg"
          alt="Propertywise services"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Our <span className="text-blue-200">Services</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white/90">
            Comprehensive real estate solutions tailored to meet your specific needs.
            From consultancy to property management, we deliver professional services
            across Tanzania.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center bg-white/95 backdrop-blur rounded-xl border border-white/40 p-6 shadow-lg">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Expert Consultancy</h3>
            <p className="mt-2 text-gray-600">Professional advisory services for all your property needs</p>
          </div>

          <div className="text-center bg-white/95 backdrop-blur rounded-xl border border-white/40 p-6 shadow-lg">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">Efficient processes ensuring timely project completion</p>
          </div>

          <div className="text-center bg-white/95 backdrop-blur rounded-xl border border-white/40 p-6 shadow-lg">
            <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Comprehensive Solutions</h3>
            <p className="mt-2 text-gray-600">End-to-end services covering all aspects of real estate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
