'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

export function PainPoints() {
  const items = [
    "Unclear or hidden fees",
    "Slow turnaround delaying loans",
    "Inconsistent or disputed valuations",
    "Hard to verify approved valuers",
  ];

  const { ref: leftRef, isInView: leftInView } = useScrollAnimation();
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation({ margin: '-50px 0px -50px 0px' });

  return (
    <section aria-labelledby="painpoints-heading" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <motion.div
          ref={leftRef}
          variants={fadeInLeft}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
        >
          <h2 id="painpoints-heading" className="text-2xl md:text-3xl font-semibold">
            Common challenges with valuation
          </h2>
          <p className="mt-3 text-[var(--pw-muted)] max-w-prose">
            Clients need clarity, speed, and confidence. These pain points often block critical decisions.
          </p>
        </motion.div>
        <motion.ul
          ref={rightRef}
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
        >
          {items.map((t, index) => (
            <motion.li
              key={t}
              className="flex items-start gap-3"
              variants={staggerItem}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="mt-1 h-2 w-2 rounded-full bg-[var(--pw-primary)]"
                aria-hidden
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
              <span>{t}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}