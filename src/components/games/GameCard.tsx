'use client';

import Link from 'next/link';
import { Users } from 'lucide-react';
import { Game } from '@/types/game';

const categoryColors: Record<string, string> = {
  'trick-taking': 'bg-blue-900/60 text-blue-300',
  shedding: 'bg-purple-900/60 text-purple-300',
  matching: 'bg-teal-900/60 text-teal-300',
  casino: 'bg-red-900/60 text-red-300',
  patience: 'bg-yellow-900/60 text-yellow-300',
  bluffing: 'bg-orange-900/60 text-orange-300',
};

function DifficultyPips({ level }: { level: number }) {
  return (
    <span className="flex gap-0.5 items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`inline-block w-2 h-2 rounded-full ${i < level ? 'bg-gold' : 'bg-white/20'}`}
        />
      ))}
    </span>
  );
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`}>
      <div className="bg-felt-mid border border-gold/10 rounded-xl p-4 hover:border-gold/40 hover:bg-felt-mid/80 transition-all cursor-pointer flex flex-col gap-3 h-full">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-card-text font-semibold text-base leading-tight">{game.name}</h3>
          <span
            className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${categoryColors[game.category] ?? 'bg-white/10 text-white'}`}
          >
            {game.category}
          </span>
        </div>

        <p className="text-card-text/70 text-sm leading-snug flex-1">{game.objective}</p>

        <div className="flex items-center justify-between text-xs text-card-text/50">
          <span className="flex items-center gap-1">
            <Users size={12} />
            {game.players.min === game.players.max
              ? `${game.players.min}`
              : `${game.players.min}–${game.players.max}`}
          </span>
          <DifficultyPips level={game.difficulty} />
        </div>
      </div>
    </Link>
  );
}
