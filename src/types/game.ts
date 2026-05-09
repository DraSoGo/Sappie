export type Difficulty = 1 | 2 | 3 | 4 | 5;
export type Category = 'trick-taking' | 'shedding' | 'matching' | 'casino' | 'patience' | 'bluffing';

export interface GameRule {
  phase: 'setup' | 'turn' | 'winning' | 'variant';
  title: string;
  body: string;
}

export interface Game {
  slug: string;
  name: string;
  category: Category;
  players: { min: number; max: number };
  deckType: string;
  difficulty: Difficulty;
  objective: string;
  rules: GameRule[];
  variants?: string[];
  tags?: string[];
}
