'use client';

import { useState } from 'react';

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'business' | 'articles' | 'books'>('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Strategy Guide',
      category: 'business',
      description: 'Comprehensive copywriting for SaaS landing pages',
      excerpt: 'Converting prospects into customers through strategic messaging and clear value proposition.'
    },
    {
      id: 2,
      title: 'Morning Reflections',
      category: 'books',
      description: 'Personal essay collection published',
      excerpt: 'A collection of thoughtful essays exploring growth, mindfulness, and personal development.'
    },
    {
      id: 3,
      title: 'Digital Marketing Trends 2024',
      category: 'articles',
      description: 'Featured article on industry publication',
      excerpt: 'In-depth analysis of emerging trends reshaping the digital marketing landscape.'
    },
    {
      id: 4,
      title: 'E-Commerce Email Campaigns',
      category: 'business',
      description: 'High-converting email sequences',
      excerpt: 'Strategic email funnels that increased customer lifetime value by 40%.'
    },
    {
      id: 5,
      title: 'The Art of Intentional Living',
      category: 'books',
      description: 'Full-length book ghostwritten',
      excerpt: 'A transformative guide to building meaningful, purpose-driven lives.'
    },
    {
      id: 6,
      title: 'Sustainable Business Practices',
      category: 'articles',
      description: 'Long-form blog series',
      excerpt: 'Exploring how modern businesses can balance profitability with environmental responsibility.'
    },
  ];

  const filtered = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Featured Work
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              A selection of recent projects that showcase versatility across creative and business writing.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {['all', 'business', 'articles', 'books'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-foreground hover:border-foreground'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className="border border-border rounded-lg p-6 bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300 animate-in fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="space-y-4">
                  {/* Category Tag */}
                  <div>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-foreground leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/60">
                    {item.description}
                  </p>

                  {/* Excerpt */}
                  <p className="text-foreground/70 leading-relaxed pt-2">
                    {item.excerpt}
                  </p>

                  {/* Learn More Link */}
                  <div className="pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      Read Case Study
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
