'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

export function Services() {
  const items = [
    { title: "Consultancy Services", desc: "Expert real estate advisory and strategic planning for property investments and developments." },
    { title: "Litigation Support Services", desc: "Professional valuation and expert witness services for legal proceedings and disputes." },
    { title: "Due Diligence", desc: "Comprehensive property assessments and risk analysis for informed decision-making." },
  ];

  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="border-t border-[var(--pw-border)] py-16 bg-[var(--pw-primary)]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-2xl text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Services</h2>
          <p className="mt-3 text-[var(--pw-muted)]">Focused, professional and aligned to institutional requirements.</p>
        </motion.div>
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((it, index) => (
            <motion.article
              key={it.title}
              className="rounded-2xl border border-[var(--pw-border)] bg-white p-6 shadow-sm transition hover:shadow-md hover:scale-105"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="h-10 w-10 rounded-lg border border-[var(--pw-border)] bg-gray-50"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <h3 className="mt-4 font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-[var(--pw-muted)]">{it.desc}</p>
              <a href="#quote" className="mt-4 inline-block text-sm font-medium text-[var(--pw-primary)] hover:underline">View more →</a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}