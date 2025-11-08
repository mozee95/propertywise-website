export function BookConsultation() {
  return (
    <section id="book" className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">
          Book a Free Consultation
        </h2>
        <p className="text-xl text-gray-600 mb-8 font-['Montserrat']">
          Speak with our property experts to discuss your specific needs and get personalized advice
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-[var(--pw-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[var(--pw-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 font-['Montserrat']">Phone Consultation</h3>
            <p className="text-sm text-gray-600 mb-4 font-['Montserrat']">
              Quick 15-minute call to discuss your requirements
            </p>
            <a
              href="tel:+255787300003"
              className="inline-flex items-center text-[var(--pw-primary)] font-medium text-sm hover:text-[var(--pw-primary-600)] font-['Montserrat']"
            >
              Call +255 787 300 003
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 font-['Montserrat']">WhatsApp Chat</h3>
            <p className="text-sm text-gray-600 mb-4 font-['Montserrat']">
              Get instant responses to your questions
            </p>
            <a
              href="https://wa.me/255787300003?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation%20for%20property%20valuation"
              className="inline-flex items-center text-green-600 font-medium text-sm hover:text-green-700 font-['Montserrat']"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 font-['Montserrat']">Email Inquiry</h3>
            <p className="text-sm text-gray-600 mb-4 font-['Montserrat']">
              Send us your detailed requirements
            </p>
            <a
              href="mailto:info@propertywiseltd.com?subject=Consultation Request&body=Hi, I would like to book a consultation for property valuation. Please contact me to schedule a meeting."
              className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 font-['Montserrat']"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="bg-[var(--pw-primary)]/5 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3 font-['Montserrat']">
            What to expect from your consultation:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--pw-primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700 font-['Montserrat']">Property assessment discussion</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--pw-primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700 font-['Montserrat']">Valuation process explanation</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--pw-primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700 font-['Montserrat']">Timeline and pricing clarity</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[var(--pw-primary)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700 font-['Montserrat']">Next steps guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}