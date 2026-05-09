'use client';

import { Search } from 'lucide-react';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-card-text/40" />
      <input
        type="text"
        placeholder="Search games…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-3 py-2 bg-felt-mid border border-gold/20 rounded-lg text-sm text-card-text placeholder-card-text/30 focus:outline-none focus:border-gold/50"
      />
    </div>
  );
}
