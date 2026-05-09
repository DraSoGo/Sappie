export type TechniqueCategory = 'shuffle' | 'deal' | 'flourish';
export type Suit = 'spades' | 'hearts' | 'diamonds' | 'clubs';
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface CardState {
  id: string;
  suit: Suit;
  rank: Rank;
  faceUp: boolean;
  x: number;
  y: number;
  rotation: number;
  zIndex: number;
  groupId?: string;
}

export interface Step {
  label: string;
  duration: number;
  cards: CardState[];
}

export interface Technique {
  slug: string;
  name: string;
  category: TechniqueCategory;
  difficulty: 1 | 2 | 3;
  why: string;
  initialCards: CardState[];
  steps: Step[];
}
