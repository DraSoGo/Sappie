'use client';

import { useState } from 'react';
import { allGames } from '@/data/games';
import { Category } from '@/types/game';
import GameCard from '@/components/games/GameCard';
import CategoryFilter from '@/components/games/CategoryFilter';
import SearchBar from '@/components/games/SearchBar';

export default function GamesPage() {
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = allGames.filter((g) => {
    const matchesCategory = category === 'all' || g.category === category;
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-card-text mb-1">Game Encyclopedia</h1>
        <p className="text-card-text/50 text-sm">
          {filtered.length === allGames.length
            ? `${allGames.length} games`
            : `${filtered.length} game${filtered.length !== 1 ? 's' : ''} matching "${search || category}"`}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <CategoryFilter selected={category} onChange={setCategory} />
        </div>
        <div className="sm:w-56">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-card-text/30 text-sm py-12 text-center">No games match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      )}
    </main>
  );
}
