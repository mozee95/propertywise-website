export function ServicesCTA() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          Let's discuss how our services can help you achieve your property goals.
          Contact us today for a consultation.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-colors"
          >
            Contact Us Today
          </a>
          <a
            href="#quote"
            className="inline-flex items-center justify-center px-8 py-3 border border-blue-400 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}