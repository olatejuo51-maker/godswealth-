'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-4xl py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* Logo/Business Name */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary/70">
              God&apos;s Wealth
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-foreground">
            Words That Build{' '}
            <span className="text-accent">Wealth</span>. Content That
            Drives Results.
          </h1>

          {/* Sub-headline */}
          <p className="font-sans text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            From captivating books and engaging blog posts to high-converting
            business copy—delivering world-class writing tailored for brands,
            authors, and businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Work With Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground/5"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
