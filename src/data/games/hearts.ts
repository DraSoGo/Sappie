import { Game } from '@/types/game';

export const hearts: Game = {
  slug: 'hearts',
  name: 'Hearts',
  category: 'trick-taking',
  players: { min: 4, max: 4 },
  deckType: 'Standard 52',
  difficulty: 3,
  objective: 'Finish with the lowest score by avoiding hearts and the Queen of Spades.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal and Pass',
      body: 'Deal all 52 cards (13 each). Before each round, each player passes 3 cards to an opponent (direction rotates: left, right, across, hold).',
    },
    {
      phase: 'turn',
      title: 'Trick Play',
      body: 'Player holding 2♣ leads first. Follow suit if able; otherwise play any card. Highest card of led suit wins. Hearts cannot be led until they have been "broken" (discarded on a previous trick). No trump suit.',
    },
    {
      phase: 'winning',
      title: 'Scoring',
      body: 'Each heart = 1 penalty point. Queen of Spades = 13 penalty points. "Shooting the moon" — taking all 13 hearts and the Queen — adds 26 to every other player instead. Game ends when someone reaches 100; lowest score wins.',
    },
  ],
  variants: [
    'Omnibus Hearts: Jack of Diamonds = −10 points (bonus card to capture).',
    'Black Maria (UK): Queen of Spades = 13, Ace of Spades = 7, King of Spades = 10.',
  ],
};
