'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

export function TrustedBy() {
  const logos = [
    { src: '/logos/logo1.png', alt: 'Azania Bank', name: 'Azania Bank' },
    { src: '/logos/logo2.png', alt: 'Absa Bank', name: 'Absa Bank' },
    { src: '/logos/logo3.png', alt: 'NMB Bank', name: 'NMB Bank' },
    { src: '/logos/logo4.png', alt: 'Standard Chartered', name: 'Standard Chartered' },
    { src: '/logos/logo5.png', alt: 'Mwanga Hakika Bank', name: 'Mwanga Hakika Bank' },
    { src: '/logos/logo6.png', alt: 'BRAC Bank', name: 'BRAC Bank' },
    { src: '/logos/logo7.png', alt: 'Taifa Gas', name: 'Taifa Gas' },
    { src: '/logos/logo8.png', alt: 'Tanzania Air Services Ltd', name: 'Tanzania Air Services Ltd' },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

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
          Some of the companies that trust us
        </motion.h2>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{
              x: [-1000, -2000]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}