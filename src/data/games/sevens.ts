import { Game } from '@/types/game';

export const sevens: Game = {
  slug: 'sevens',
  name: 'Sevens',
  category: 'shedding',
  players: { min: 3, max: 7 },
  deckType: 'Standard 52',
  difficulty: 1,
  objective: 'Be the first to discard all cards by building four suit sequences outward from the 7s.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal',
      body: 'Deal all 52 cards as evenly as possible. Players with extra cards may draw fewer cards in the next deal. No cards are face-up yet.',
    },
    {
      phase: 'turn',
      title: 'Play',
      body: 'Player holding 7♦ goes first and plays it. On each turn, a player must play a valid card or pass (some variants penalise passes). Valid cards: any 7 (starts a new suit row), or a card adjacent to one already played in its suit row (e.g., 8♦ or 6♦ after 7♦).',
    },
    {
      phase: 'winning',
      title: 'First Out',
      body: 'First player to empty their hand wins. In scored versions, remaining players score penalty points equal to remaining cards\' face values.',
    },
  ],
  variants: [
    'Fan Tan (variant name): same rules; passing consumes a token, adding strategy.',
    'Parliament / Domino: identical game under different regional names.',
  ],
};
