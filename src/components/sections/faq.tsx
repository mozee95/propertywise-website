export function FAQ() {
  const items = [
    { q: "How long does a valuation take?", a: "Most reports are delivered within 2–5 working days depending on property type and location." },
    { q: "Are your reports accepted by banks?", a: "Yes. Our certified valuers produce bank‑recognized reports that meet institutional requirements." },
    { q: "Where do you operate?", a: "Dar es Salaam and regions across Tanzania — ask us about your location." },
    { q: "How are fees determined?", a: "Fees depend on property type, scope and location. We always provide a clear quotation upfront." },
  ];

  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">FAQs</h2>
        <div className="mt-8 divide-y overflow-hidden rounded-2xl border border-[var(--pw-border)] bg-white shadow-sm">
          {items.map((it) => (
            <details key={it.q} className="group p-5">
              <summary className="cursor-pointer list-none font-medium">
                {it.q}
              </summary>
              <p className="mt-2 text-sm text-[var(--pw-muted)]">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}