'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

export function Testimonials() {
  const items = [
    {
      quote: "I am writing to give Andrew Kato highest recommendation. Andrew possesses all the attributes necessary to be an excellent broker: he knows his market extremely well; he is diligent, responsive, and yet very patient with his clients. Andrew is both very professional and personable. he clearly takes pride in doing a good job.",
      name: "Savannah Plains International School Ltd",
      role: "Educational Institution"
    },
    {
      quote: "We would like to say that all staff were so professional, pleasant and a pleasure to deal with. We were so impressed with the way in which your office goes about their business. We had been through 15 months of hell with 4 other real estates, so it was so nice to be treated with respect and to have our home sold so quickly.",
      name: "Prof. Rock Akarro",
      role: "Professor"
    },
    {
      quote: "We are very happy with the service we got from you and I have mentioned your company to quite a few people - we had an offer for the house before most high street estate agents would have got it on the market! Good luck with your business, I am sure it will be very successful.",
      name: "Mr & Mrs John Kaizilege",
      role: "Property Sellers"
    },
    {
      quote: "We think both Bukuku and Nolasco work as an exceptional team. You were always there or called us back within minutes. This is exceptional service. You both took us to numerous houses. Though we were so undecided, you never complained or made us feel that we were difficult clients.",
      name: "Mr & Mrs Isidory Minja",
      role: "Homebuyers"
    },
  ];

  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="border-t border-[var(--pw-border)] py-16 bg-[var(--pw-primary)]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          className="text-center text-2xl font-semibold md:text-3xl"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          What clients say
        </motion.h2>
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((t, index) => (
            <motion.figure
              key={t.quote}
              className="rounded-2xl border border-[var(--pw-border)] bg-white p-6 shadow-sm"
              variants={staggerItem}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-sm text-[var(--pw-muted)]">{t.name} · {t.role}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}