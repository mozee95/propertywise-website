'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

export function Solutions() {
  const items = [
    { title: "Transparent Pricing", desc: "Clear quotations with no hidden charges." },
    { title: "On‑Time Delivery", desc: "Turnaround aligned to bank SLAs and your timelines." },
    { title: "Bank‑Recognized", desc: "Certified valuers. Institution‑ready reports." },
  ];

  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="border-y border-[var(--pw-border)] py-16 bg-[var(--pw-primary)]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          className="text-center text-2xl font-semibold md:text-3xl"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Why Propertywise
        </motion.h2>
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              className="rounded-2xl border border-[var(--pw-border)] bg-white p-6 shadow-sm"
              variants={staggerItem}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="h-10 w-10 rounded-lg border border-[var(--pw-border)] bg-gray-50"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <h3 className="mt-4 font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-[var(--pw-muted)]">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}