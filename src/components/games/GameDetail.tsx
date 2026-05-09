'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users } from 'lucide-react';
import { Game, GameRule } from '@/types/game';

const categoryColors: Record<string, string> = {
  'trick-taking': 'bg-blue-900/60 text-blue-300',
  shedding: 'bg-purple-900/60 text-purple-300',
  matching: 'bg-teal-900/60 text-teal-300',
  casino: 'bg-red-900/60 text-red-300',
  patience: 'bg-yellow-900/60 text-yellow-300',
  bluffing: 'bg-orange-900/60 text-orange-300',
};

const tabs: { value: GameRule['phase']; label: string }[] = [
  { value: 'setup', label: 'Setup' },
  { value: 'turn', label: 'Turn Structure' },
  { value: 'winning', label: 'Winning' },
  { value: 'variant', label: 'Variants' },
];

function DifficultyPips({ level }: { level: number }) {
  return (
    <span className="flex gap-1 items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`inline-block w-2.5 h-2.5 rounded-full ${i < level ? 'bg-gold' : 'bg-white/20'}`}
        />
      ))}
    </span>
  );
}

export default function GameDetail({ game }: { game: Game }) {
  const [activeTab, setActiveTab] = useState<GameRule['phase']>('setup');

  const visibleRules = game.rules.filter((r) => r.phase === activeTab);
  const hasVariants = (game.variants?.length ?? 0) > 0;

  const availableTabs = tabs.filter((t) => {
    if (t.value === 'variant') return hasVariants;
    return game.rules.some((r) => r.phase === t.value);
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/games"
        className="inline-flex items-center gap-1.5 text-sm text-card-text/60 hover:text-gold mb-6"
      >
        <ArrowLeft size={14} /> Back to Games
      </Link>

      <div className="mb-6">
        <div className="flex flex-wrap items-start gap-3 mb-2">
          <h1 className="text-3xl font-bold text-card-text">{game.name}</h1>
          <span
            className={`text-xs px-2 py-1 rounded-full self-center ${categoryColors[game.category] ?? 'bg-white/10 text-white'}`}
          >
            {game.category}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-card-text/60 mb-3">
          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {game.players.min === game.players.max
              ? `${game.players.min} players`
              : `${game.players.min}–${game.players.max} players`}
          </span>
          <span>{game.deckType}</span>
          <span className="flex items-center gap-1.5">
            Difficulty: <DifficultyPips level={game.difficulty} />
          </span>
        </div>

        <p className="text-card-text/80 text-base border-l-2 border-gold/40 pl-3 italic">
          {game.objective}
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 mb-6 border-b border-gold/10 overflow-x-auto">
        {availableTabs.map((t) => (
          <button
            key={t.value}
            onClick={() => setActiveTab(t.value)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors -mb-px ${
              activeTab === t.value
                ? 'border-gold text-gold'
                : 'border-transparent text-card-text/50 hover:text-card-text'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'variant' ? (
        <ul className="space-y-3">
          {game.variants?.map((v, i) => (
            <li key={i} className="bg-felt-mid border border-gold/10 rounded-lg p-4 text-card-text/80 text-sm">
              {v}
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-4">
          {visibleRules.map((rule, i) => (
            <div key={i} className="bg-felt-mid border border-gold/10 rounded-lg p-4">
              <h3 className="text-gold font-semibold text-sm mb-1">{rule.title}</h3>
              <p className="text-card-text/80 text-sm leading-relaxed">{rule.body}</p>
            </div>
          ))}
          {visibleRules.length === 0 && (
            <p className="text-card-text/40 text-sm">No rules for this section.</p>
          )}
        </div>
      )}
    </div>
  );
}
