'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

interface PortfolioProject {
  title: string;
  type: string;
  location: string;
  description: string;
  year: string;
  badge: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    title: "M.M Integrated Steel Mills",
    type: "Industrial Complex",
    location: "Multiple locations across Tanzania",
    description: "Multi-location industrial steel manufacturing complex with specialized equipment and infrastructure",
    year: "2025",
    badge: "Industrial"
  },
  {
    title: "Serena Hotel Dar es Salaam",
    type: "Hospitality Property",
    location: "Upanga, Dar es Salaam",
    description: "Prime luxury hotel property in the heart of Dar es Salaam's business district",
    year: "2024",
    badge: "Hospitality"
  },
  {
    title: "Bonite Bottlers (Coca-Cola)",
    type: "Beverage Manufacturing",
    location: "Moshi, Kilimanjaro",
    description: "Complete beverage production facility with specialized bottling equipment and infrastructure",
    year: "2024",
    badge: "Manufacturing"
  },
  {
    title: "SBC Tanzania (Pepsi)",
    type: "Multi-location Industrial Plants",
    location: "5 regions across Tanzania",
    description: "Comprehensive valuation of beverage production facilities across multiple strategic locations",
    year: "2024",
    badge: "Industrial"
  },
  {
    title: "Alaf Tanzania Steel Factory",
    type: "100,000-ton Steel Facility",
    location: "Pugu Road, Dar es Salaam",
    description: "Massive steel production complex with roofing sheets, pipes, and nails manufacturing capabilities",
    year: "2024",
    badge: "Manufacturing"
  },
  {
    title: "King Lion Aluminium Factory",
    type: "Aluminium Manufacturing",
    location: "Kibaha, Coast Region",
    description: "Modern aluminium and galvanized roofing sheet production facility under construction",
    year: "2024",
    badge: "Industrial"
  }
];

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Industrial':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Hospitality':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Manufacturing':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export function Portfolio() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="border-t border-[var(--pw-border)] py-16 bg-[var(--pw-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-2xl text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Recent Major Valuations</h2>
          <p className="mt-3 text-[var(--pw-muted)]">Trusted by leading companies across Tanzania for high-value property assessments</p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="rounded-2xl border border-[var(--pw-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              variants={staggerItem}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getBadgeColor(project.badge)}`}>
                  {project.badge}
                </span>
                <span className="text-xs text-[var(--pw-muted)] font-medium">{project.year}</span>
              </div>

              <h3 className="font-semibold text-lg leading-tight mb-2">{project.title}</h3>
              <p className="text-sm font-medium text-[var(--pw-primary)] mb-2">{project.type}</p>
              <p className="text-sm text-[var(--pw-muted)] mb-3">{project.description}</p>

              <div className="flex items-center text-xs text-[var(--pw-muted)]">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">{project.location}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <a
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-[var(--pw-primary)] text-[var(--pw-primary)] font-medium rounded-lg hover:bg-[var(--pw-primary)] hover:text-white transition-colors duration-300"
          >
            View Full Portfolio
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}