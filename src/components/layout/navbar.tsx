export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/20 backdrop-blur-md supports-[backdrop-filter]:bg-white/10">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a href="#" className="group flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--pw-primary)] text-white shadow-sm">
            <span className="text-xs font-bold">PW</span>
          </div>
          <span className="text-sm font-semibold tracking-wide group-hover:text-[var(--pw-primary)]">Propertywise (T) Ltd</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          <li className="relative group">
            <a className="hover:text-[var(--pw-primary)] flex items-center gap-1" href="/services">
              Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[var(--pw-border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <a href="/services#consultancy-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--pw-primary)] rounded-md">
                  <div className="font-medium">Consultancy Services</div>
                  <div className="text-xs text-gray-500">Expert real estate advisory and strategic planning</div>
                </a>
                <a href="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--pw-primary)] rounded-md">
                  <div className="font-medium">Litigation Support Services</div>
                  <div className="text-xs text-gray-500">Professional valuation and expert witness services</div>
                </a>
                <a href="/services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--pw-primary)] rounded-md">
                  <div className="font-medium">Due Diligence</div>
                  <div className="text-xs text-gray-500">Comprehensive property assessments and risk analysis</div>
                </a>
              </div>
            </div>
          </li>
          <li><a className="hover:text-[var(--pw-primary)]" href="#process">How it works</a></li>
          <li><a className="hover:text-[var(--pw-primary)]" href="/insights">Insights</a></li>
          <li><a className="hover:text-[var(--pw-primary)]" href="#faq">FAQ</a></li>
          <li><a className="hover:text-[var(--pw-primary)]" href="#contact">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="inline-flex items-center rounded-xl border px-3 py-2 text-sm shadow-sm transition hover:bg-gray-50"
          >
            Book a Call
          </a>
          <a
            href="/#book"
            className="hidden items-center rounded-xl bg-[var(--pw-primary)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--pw-primary-600)] md:inline-flex"
          >
            Request a Valuation
          </a>
        </div>
      </nav>
    </header>
  );
}