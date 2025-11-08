'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';

export function TrustedBy() {
  const companies = [
    "Agricultural Inputs Trust Fund (AGTF)",
    "AM Steel Rolling Company",
    "Arusha Lutheran Medical Centre (ALMC)",
    "Bakhresa Food Products Limited",
    "Bidyanguze Group (T) Limited",
    "Bugando University College of Health Sciences",
    "Cargil Tanzania Limited",
    "COPEC Petroleum Limited",
    "CRDB Bank Limited",
    "Dar es Salaam Community Bank Limited (DCB)",
    "Dar Village Limited",
    "Dhando Road Haulage Limited",
    "East African Apartments Limited",
    "Eco Energy (T) Limited",
    "Evangelist Lutheran Church of Tanzania (ELCT)",
    "First National Bank (T) Limited (FNB)",
    "Hass Petroleum Limited",
    "KCB Bank Tanzania Building (KCB)",
    "National Microfinance Bank PLC (NMB)",
    "NIC Bank Tanzania Limited (NIC)",
    "Nyarusai Limited",
    "OIKO Credit Tanzania Limited",
    "Pangani Farms Limited",
    "RAK Properties, Ras Al Khaimah, UAE",
    "St. Peter's Catholic Church in Dar Es Salaam City",
    "Stage Farm Limited",
    "Synarge Group of Companies",
    "TANINGRA Contractors Limited",
    "Tanzania Assemblies of God Church (TAG)",
    "Tanzania Ports Authority (TPA)",
    "Tumaini University, Iringa",
    "VITRECS Oil Mill Tanzania Limited",
    "World Oil Limited",
    "ZEK Group International"
  ];

  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          className="text-center text-2xl md:text-3xl font-semibold text-[var(--pw-primary)] mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Trusted by Leading Institutions
        </motion.h2>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: [-1000, -2000]
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <span
                key={index}
                className="text-sm font-medium text-gray-600 hover:text-[var(--pw-primary)] transition-colors duration-300"
              >
                {company}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}