'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft } from '@/hooks/useScrollAnimation';

export function Hero() {
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation();

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-image.jpg"
          alt="Dar es Salaam cityscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <motion.div
              ref={leftRef}
              className="text-white font-['Montserrat']"
              variants={fadeInLeft}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
            >
              <motion.span
                className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white shadow-sm"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <span className="h-2 w-2 rounded-full bg-white" /> Bank‑accepted reports
              </motion.span>
              <motion.h1
                className="mt-4 text-3xl font-black leading-tight md:text-5xl lg:text-6xl"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                Accurate Real Estate Valuations for Tanzania — Delivered On Time
              </motion.h1>
              <motion.p
                className="mt-4 max-w-prose text-white/90 text-lg font-semibold"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Certified valuation & advisory for homebuyers, banks and investors. Transparent fees, clear timelines and institution‑ready reports.
              </motion.p>
              <motion.div
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
              >
                <a href="#book" className="inline-flex items-center justify-center rounded-xl bg-[var(--pw-primary)] px-5 py-3 font-bold text-white shadow-sm transition hover:bg-[var(--pw-primary-600)]">Request a Valuation</a>
                <a href="#book" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-white/20">Book a Consultation</a>
              </motion.div>
              <motion.div
                className="mt-6 flex items-center gap-4 text-xs font-medium text-white/80"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <span>Coverage: Nationwide</span>
                <span>•</span>
                <span>Turnaround: 2–5 business days*</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}