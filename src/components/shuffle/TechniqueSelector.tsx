'use client';

import { useVisualizerStore } from '@/store/visualizer';
import { shuffleTechniques, dealTechniques, flourishTechniques } from '@/data/techniques';
import { Technique } from '@/types/technique';

const difficultyLabel = ['', 'Beginner', 'Intermediate', 'Advanced'];

function TechniqueItem({ t, active }: { t: Technique; active: boolean }) {
  const { setTechnique } = useVisualizerStore();
  return (
    <button
      onClick={() => setTechnique(t)}
      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
        active
          ? 'bg-gold/15 text-gold border border-gold/30'
          : 'text-card-text/70 hover:bg-felt-mid hover:text-card-text border border-transparent'
      }`}
    >
      <div className="font-medium">{t.name}</div>
      <div className="text-xs text-card-text/40 mt-0.5">{difficultyLabel[t.difficulty]}</div>
    </button>
  );
}

function Group({ label, techniques, activSlug }: { label: string; techniques: Technique[]; activSlug?: string }) {
  return (
    <div className="mt-2 first:mt-0">
      <p className="text-xs font-semibold text-gold/60 uppercase tracking-widest px-3 mb-1">
        {label}
      </p>
      {techniques.map((t) => (
        <TechniqueItem key={t.slug} t={t} active={activSlug === t.slug} />
      ))}
    </div>
  );
}

export default function TechniqueSelector() {
  const { technique } = useVisualizerStore();

  return (
    <div className="flex flex-col gap-1 overflow-y-auto">
      <Group label="Shuffles" techniques={shuffleTechniques} activSlug={technique?.slug} />
      <Group label="Deals" techniques={dealTechniques} activSlug={technique?.slug} />
      <Group label="Flourishes" techniques={flourishTechniques} activSlug={technique?.slug} />
    </div>
  );
}
