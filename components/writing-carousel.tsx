'use client';

import { useState } from 'react';

const previews = [
  ['Nigeria at 7AM', 'Spoken word', 'A three-part poem about Nigeria’s morning rhythm—sound, survival, faith, and hustle.'],
  ['Avant-garde', 'Poetry', 'A reflective piece about becoming and the strength shaped by difficult roads.'],
  ['Olic', 'Product storytelling', 'Premium refreshment copy positioned with quiet luxury and character.'],
  ['Brand Story', 'Narrative strategy', 'A clear origin story that helps audiences understand, remember, and trust a brand.'],
  ['Social Captions', 'Content strategy', 'Purposeful captions built around education, storytelling, promotion, and community.'],
  ['Campaign Concepts', 'Creative direction', 'Campaign ideas and messaging that turn a product launch into a memorable story.'],
  ['Personal Messages', 'Emotional writing', 'Warm, intentional words for appreciation, apology, celebration, and important moments.'],
  ['Speech Writing', 'Public speaking', 'Keynotes, wedding speeches, conference remarks, and scripts written for the room.'],
  ['Ghostwriting', 'Story development', 'Books, memoirs, articles, and personal narratives shaped around the client’s voice.'],
  ['Editorial Support', 'Consultation', 'Editing that improves structure, clarity, tone, and emotional impact without erasing voice.'],
  ['Brand Voice', 'Positioning', 'Messaging pillars and language that make a business sound consistent and distinct.'],
  ['Event Moderation', 'Audience engagement', 'Confident transitions, thoughtful prompts, and smooth event flow for live audiences.'],
] as const;

export function WritingCarousel() {
  const [active, setActive] = useState(0);
  const current = previews[active];
  const move = (direction: number) => setActive((active + direction + previews.length) % previews.length);

  return (
    <section id="writing" className="bg-secondary/25 px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Writing previews</p>
          <h2 className="font-serif text-4xl text-foreground md:text-6xl">A library of words with a pulse.</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/70">Preview selected directions across poetry, brand copy, speeches, strategy, and storytelling. Add finished images later in the public folder to give each card its own visual cover.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-stretch">
          <div className="flex min-h-[360px] flex-col justify-between rounded-2xl bg-foreground p-8 text-background md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">{String(active + 1).padStart(2, '0')} / {String(previews.length).padStart(2, '0')}</p>
              <p className="mt-10 text-sm uppercase tracking-[0.18em] text-primary-foreground/60">{current[1]}</p>
              <h3 className="mt-4 font-serif text-4xl md:text-5xl">{current[0]}</h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/75">{current[2]}</p>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <button type="button" aria-label="Previous writing preview" onClick={() => move(-1)} className="rounded-full border border-background/30 px-5 py-2 text-sm transition hover:bg-background/10">Previous</button>
              <button type="button" aria-label="Next writing preview" onClick={() => move(1)} className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground transition hover:opacity-90">Next</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2">
            {previews.map((preview, index) => (
              <button key={preview[0]} type="button" onClick={() => setActive(index)} aria-label={`Preview ${preview[0]}`} aria-pressed={active === index} className={`min-h-28 rounded-xl border p-4 text-left transition ${active === index ? 'border-primary bg-primary/10' : 'border-border bg-background hover:border-primary/60'}`}>
                <span className="text-xs font-semibold text-primary">{String(index + 1).padStart(2, '0')}</span>
                <span className="mt-2 block font-serif text-lg leading-tight text-foreground">{preview[0]}</span>
                <span className="mt-2 block text-xs text-foreground/55">{preview[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
