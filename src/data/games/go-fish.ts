import { Game } from '@/types/game';

export const goFish: Game = {
  slug: 'go-fish',
  name: 'Go Fish',
  category: 'matching',
  players: { min: 2, max: 6 },
  deckType: 'Standard 52',
  difficulty: 1,
  objective: 'Collect the most four-of-a-kind sets by asking opponents for matching cards.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal',
      body: 'Deal 7 cards to each player (5 cards each if 4+ players). Place remaining cards face-down as the "ocean" (draw pile).',
    },
    {
      phase: 'turn',
      title: 'Ask and Fish',
      body: 'On your turn, ask any opponent for a specific rank you already hold at least one of (e.g., "Do you have any 7s?"). If they do, they hand over all cards of that rank. If not, they say "Go Fish" and you draw from the ocean. Your turn ends when you go fish (unless you draw the rank you asked for).',
    },
    {
      phase: 'winning',
      title: 'Books and Winner',
      body: 'When you collect all four cards of a rank, place the set face-up as a "book". Game ends when all 13 books are complete. Player with the most books wins.',
    },
  ],
  variants: [
    'Pairs version: collect pairs instead of four-of-a-kinds; popular with younger children.',
    'Happy Families: uses a custom deck of illustrated family groups instead of standard ranks.',
  ],
};
