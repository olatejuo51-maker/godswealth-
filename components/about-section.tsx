'use client';

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Professional Writer & Content Strategist
            </h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg leading-relaxed">
                I&apos;m a versatile writer who bridges the gap between creative
                storytelling and strategic business intellect. Whether you need
                captivating narratives that engage readers or persuasive copy
                that converts clients, I bring the same level of expertise and
                attention to detail to every project.
              </p>
              <p className="text-lg leading-relaxed">
                My background spans creative writing, content marketing, and
                brand copywriting—giving me a unique ability to understand your
                audience and craft messaging that resonates. I don&apos;t just
                write; I write with purpose.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="space-y-8">
              <div className="border-l-2 border-accent pl-6 py-2">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">
                  Creative Writing
                </p>
                <p className="text-foreground/70">
                  Books, novels, engaging blog posts that captivate
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6 py-2">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">
                  Business Writing
                </p>
                <p className="text-foreground/70">
                  Website copy, proposals, email marketing that converts
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6 py-2">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-1">
                  Strategic Approach
                </p>
                <p className="text-foreground/70">
                  Every word serves your goals and resonates with readers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
