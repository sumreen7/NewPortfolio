'use client';

import React from 'react';

const hobbies = [
  {
    emoji: '🎾',
    title: 'Tennis',
    description: 'Started at 12, won my first national tournament at 16. The court taught me something no classroom could — how to stay calm when everything is on the line.',
    tag: 'Since age 12',
  },
  {
    emoji: '🏔️',
    title: 'Trekking',
    description: 'I climbed the Himalayas. The Brahmatal trek was freezing, exhausting, and absolutely worth every step. There\'s something about being tiny in front of a mountain that resets your whole perspective.',
    tag: 'Brahmatal, Himalayas',
  },
  {
    emoji: '📚',
    title: '@coffeennovels',
    description: 'I built a 50K+ book community on Instagram because I couldn\'t stop talking about fiction. Fantasy mystery is my genre — give me magic, give me mystery, give me a twist I never saw coming.',
    tag: '50K+ followers',
  },
  {
    emoji: '🍜',
    title: 'Food & Travel',
    description: 'I plan trips around restaurants. I will absolutely walk 40 minutes in an unfamiliar city for a meal someone on the internet swore was life-changing. No regrets, ever.',
    tag: 'Foodie & explorer',
  },
];

const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Hobbies
        </h2>
        <p className="mt-2 text-muted-foreground text-sm">
          Life outside of product & code
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="rounded-2xl border border-border bg-muted/40 p-5 transition-all hover:bg-muted/70"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-3xl">{hobby.emoji}</span>
              <span className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground border border-border">
                {hobby.tag}
              </span>
            </div>
            <h3 className="text-foreground font-semibold text-base mb-1">
              {hobby.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;