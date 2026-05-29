'use client';

import { useState } from 'react';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'creative' | 'business'>('creative');

  return (
    <section className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Two Pillars of Excellence
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-border">
            <button
              onClick={() => setActiveTab('creative')}
              className={`pb-4 px-2 font-serif text-xl font-semibold transition-colors ${
                activeTab === 'creative'
                  ? 'text-foreground border-b-2 border-accent -mb-[2px]'
                  : 'text-foreground/50 hover:text-foreground/70'
              }`}
            >
              Creative & Content
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`pb-4 px-2 font-serif text-xl font-semibold transition-colors ${
                activeTab === 'business'
                  ? 'text-foreground border-b-2 border-accent -mb-[2px]'
                  : 'text-foreground/50 hover:text-foreground/70'
              }`}
            >
              Business & Copywriting
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === 'creative' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-foreground">
                    For Audiences
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    I create content that captivates, engages, and inspires
                    readers while building your audience and reputation.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background p-6 border border-border rounded-lg space-y-3">
                    <h4 className="font-serif text-lg text-foreground">
                      Book & Novel Ghostwriting
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Full-length books, memoirs, and novels tailored to your
                      vision and voice.
                    </p>
                  </div>
                  <div className="bg-background p-6 border border-border rounded-lg space-y-3">
                    <h4 className="font-serif text-lg text-foreground">
                      Engaging Blog Posts & Articles
                    </h4>
                    <p className="text-sm text-foreground/70">
                      In-depth, well-researched content that ranks and drives
                      traffic.
                    </p>
                  </div>
                  <div className="bg-background p-6 border border-border rounded-lg space-y-3">
                    <h4 className="font-serif text-lg text-foreground">
                      Social Media & Thought Leadership
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Compelling posts that establish authority and build
                      community.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'business' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-foreground">
                    For Clients & Brands
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    I craft strategic copy that builds trust, drives decisions,
                    and transforms readers into clients.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background p-6 border border-border rounded-lg space-y-3">
                    <h4 className="font-serif text-lg text-foreground">
                      High-Converting Website Copy
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Homepage, landing pages, and sales pages that convert
                      visitors into customers.
                    </p>
                  </div>
                  <div className="bg-background p-6 border border-border rounded-lg space-y-3">
                    <h4 className="font-serif text-lg text-foreground">
                      Business Proposals & Profiles
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Professional documents that showcase expertise and
                      close deals.
                    </p>
                  </div>
                  <div className="bg-background p-6 border border-border rounded-lg space-y-3">
                    <h4 className="font-serif text-lg text-foreground">
                      Email Marketing & Newsletters
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Engaging emails that nurture relationships and drive
                      revenue.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
