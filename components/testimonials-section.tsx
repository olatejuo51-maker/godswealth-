'use client';

import { useState, useEffect } from 'react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote:
        'Working with her transformed how we communicate with our customers. The website copy alone increased our conversion rate by 35%. Truly exceptional.',
      author: 'Sarah Chen',
      role: 'Founder, Tech Startup',
      category: 'business'
    },
    {
      id: 2,
      quote:
        'She brought my vision to life in ways I couldn&apos;t have imagined. The book is beautifully written, emotionally resonant, and readers are loving it.',
      author: 'Marcus Johnson',
      role: 'Author & Entrepreneur',
      category: 'creative'
    },
    {
      id: 3,
      quote:
        'The blog posts she writes consistently rank on the first page of Google. Her research and storytelling combine to create content that actually drives business results.',
      author: 'Emma Rodriguez',
      role: 'Marketing Director, B2B SaaS',
      category: 'business'
    },
    {
      id: 4,
      quote:
        'Reliability, professionalism, and exceptional quality. She understands my brand voice perfectly and delivers on every deadline. Highly recommended.',
      author: 'James Wilson',
      role: 'CEO, E-commerce Brand',
      category: 'business'
    },
    {
      id: 5,
      quote:
        'As a published author, I can confidently say her ghostwriting services are top-tier. She captures voice, pacing, and emotion perfectly.',
      author: 'Dr. Patricia Lee',
      role: 'Bestselling Author',
      category: 'creative'
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  return (
    <section className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              What Clients Say
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className="bg-background border border-border rounded-lg p-8 md:p-12 min-h-96 flex flex-col justify-between">
              {/* Quote */}
              <div className="space-y-6">
                <div className="text-4xl text-accent/30">&ldquo;</div>
                <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
              </div>

              {/* Author */}
              <div className="space-y-2 pt-8 border-t border-border">
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-foreground/70">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 pt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-border w-2 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Previous/Next Buttons */}
            <div className="absolute inset-y-0 flex items-center justify-between w-full px-4 pointer-events-none">
              <button
                onClick={() => {
                  setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  setAutoPlay(false);
                }}
                className="pointer-events-auto opacity-30 hover:opacity-100 transition-opacity"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                  setAutoPlay(false);
                }}
                className="pointer-events-auto opacity-30 hover:opacity-100 transition-opacity"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
