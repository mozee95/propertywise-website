export function Footer() {
  return (
    <footer id="contact" className="border-t border-blue-400 bg-blue-600">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-white" />
            <span className="font-semibold text-white">Propertywise Ltd</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-blue-100">Real estate valuation & advisory across Tanzania.</p>
        </div>
        <div>
          <h3 className="font-medium text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
            <li><a className="hover:text-white transition-colors" href="#process">How it works</a></li>
            <li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li>Mortgage Valuation</li>
            <li>Market Valuation</li>
            <li>Advisory & Feasibility</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li>Dar es Salaam, Tanzania</li>
            <li><a className="hover:text-white transition-colors" href="mailto:info@propertywiseltd.com">info@propertywiseltd.com</a></li>
            <li><a className="hover:text-white transition-colors" href="tel:+255000000000">+255 787 300 003</a></li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-lg border border-blue-400 text-white shadow-sm transition hover:bg-white hover:text-blue-600" href="#">WA</a>
            <a aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg border border-blue-400 text-white shadow-sm transition hover:bg-white hover:text-blue-600" href="#">in</a>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-400 py-6 text-center text-xs text-blue-100">© {new Date().getFullYear()} Propertywise Ltd. All rights reserved.</div>
    </footer>
  );
}