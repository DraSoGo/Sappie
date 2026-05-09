'use client';

import { Category } from '@/types/game';

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'trick-taking', label: 'Trick-Taking' },
  { value: 'shedding', label: 'Shedding' },
  { value: 'matching', label: 'Matching' },
  { value: 'casino', label: 'Casino' },
  { value: 'patience', label: 'Patience' },
  { value: 'bluffing', label: 'Bluffing' },
];

interface Props {
  selected: Category | 'all';
  onChange: (cat: Category | 'all') => void;
}

export default function CategoryFilter({ selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c.value}
          onClick={() => onChange(c.value)}
          className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
            selected === c.value
              ? 'bg-gold text-felt-dark border-gold font-semibold'
              : 'border-gold/20 text-card-text/70 hover:border-gold/50 hover:text-card-text'
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
