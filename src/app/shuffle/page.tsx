'use client';

import Visualizer from '@/components/shuffle/Visualizer';

export default function ShufflePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-card-text mb-1">Shuffle &amp; Deal Visualizer</h1>
        <p className="text-card-text/50 text-sm">
          Step through card handling techniques. Use Space / ◀ ▶ keys or the controls below.
        </p>
      </div>
      <Visualizer defaultSlug="overhand" />
    </main>
  );
}
