'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { articles } from '@/data/articles';

export function InsightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentArticle = articles[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">Latest Insights</h2>
          <p className="text-xl text-gray-600 font-['Montserrat']">Expert advice and market insights from Tanzania's property professionals</p>
        </div>

        <div className="relative">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                {/* Article Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>

                {/* Article Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--pw-primary)]/10 text-[var(--pw-primary)] font-['Montserrat']">
                      {currentArticle.category}
                    </span>
                    <span className="text-sm text-gray-500 font-['Montserrat']">{currentArticle.readTime}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">
                    {currentArticle.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-lg font-['Montserrat']">
                    {currentArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-['Montserrat']">
                      {new Date(currentArticle.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <a
                      href={`/insights/${currentArticle.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-[var(--pw-primary)] text-white font-medium rounded-xl hover:bg-[var(--pw-primary-600)] transition-colors font-['Montserrat']"
                    >
                      Read Article
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
              aria-label="Previous article"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-[var(--pw-primary)]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to article ${index + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
              aria-label="Next article"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Article Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 font-['Montserrat']">
              {currentIndex + 1} of {articles.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
