export function BlogHero() {
  return (
    <section className="relative pt-24 pb-16">
      <div className="absolute inset-0">
        <img
          src="/blog-1.jpg"
          alt="Property consultation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Property <span className="text-blue-200">Insights</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white/90">
            Expert advice and insights from Tanzania's leading property professionals.
            Stay informed with the latest trends, guides, and market analysis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 text-center">
          <div className="bg-white/95 backdrop-blur rounded-xl border border-white/40 p-6 shadow-lg">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Market Insights</h3>
            <p className="mt-2 text-gray-600">Latest trends and analysis of Tanzania's property market</p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-xl border border-white/40 p-6 shadow-lg">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Expert Guides</h3>
            <p className="mt-2 text-gray-600">Comprehensive guides for buying and selling property</p>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-xl border border-white/40 p-6 shadow-lg">
            <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Professional Tips</h3>
            <p className="mt-2 text-gray-600">Industry insights and professional advice</p>
          </div>
        </div>
      </div>
    </section>
  );
}
