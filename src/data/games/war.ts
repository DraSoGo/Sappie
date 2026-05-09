import { Game } from '@/types/game';

export const war: Game = {
  slug: 'war',
  name: 'War',
  category: 'matching',
  players: { min: 2, max: 2 },
  deckType: 'Standard 52',
  difficulty: 1,
  objective: 'Capture all 52 cards by consistently playing higher-ranked cards than your opponent.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal',
      body: 'Divide the deck evenly — 26 cards face-down to each player. Players do not look at their cards.',
    },
    {
      phase: 'turn',
      title: 'Battle',
      body: 'Each player simultaneously flips the top card from their pile. Higher card wins both cards, which go to the bottom of the winner\'s pile. Card ranking: 2 (low) to Ace (high). Suit does not matter.',
    },
    {
      phase: 'turn',
      title: 'War',
      body: 'When both players flip equal-ranked cards, "war" occurs. Each player places 3 cards face-down, then flips a fourth card. Highest fourth card wins all 10 cards. If equal again, war repeats.',
    },
    {
      phase: 'winning',
      title: 'Victory',
      body: 'Win by capturing all 52 cards. Alternatively, set a time limit and declare the player with more cards the winner.',
    },
  ],
  variants: [
    'Three-player War: divide deck among three players; ties involve all three in war.',
    'No-War variant: ties are a draw and both cards are discarded; speeds up gameplay.',
  ],
};
