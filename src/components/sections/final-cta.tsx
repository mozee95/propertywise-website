export function FinalCTA() {
  return (
    <section id="quote" className="py-16 bg-red-100">
      <div className="mx-auto max-w-4xl rounded-3xl border border-red-200 bg-red-50 p-10 px-4 text-center shadow-sm sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold md:text-3xl text-red-900">Ready for an accurate, on‑time valuation?</h2>
        <p className="mt-3 text-red-700">
          Get a clear quotation and timeline today.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-red-300 text-red-700 px-5 py-3 shadow-sm transition hover:bg-red-200">
            Contact Us
          </a>
          <a href="#book" className="inline-flex items-center justify-center rounded-xl bg-red-600 text-white px-5 py-3 font-medium shadow-sm transition hover:bg-red-700">
            Request a Valuation
          </a>
        </div>
      </div>
    </section>
  );
}