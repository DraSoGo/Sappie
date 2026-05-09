import { Game } from '@/types/game';

export const speed: Game = {
  slug: 'speed',
  name: 'Speed',
  category: 'shedding',
  players: { min: 2, max: 2 },
  deckType: 'Standard 52',
  difficulty: 2,
  objective: 'Be the first player to discard all cards by playing as fast as possible onto shared center piles.',
  rules: [
    {
      phase: 'setup',
      title: 'Layout',
      body: 'Deal 20 cards to each player (their draw pile). Place 5 cards face-down in a row between players: two center piles (1 card each) and two side piles (5 cards each, will be flipped to restart stalled play). Each player holds up to 5 cards in hand.',
    },
    {
      phase: 'turn',
      title: 'Simultaneous Play',
      body: 'Both players flip a center card simultaneously to start. No turns — play as fast as you can. Place a card onto either center pile if it is one rank higher or lower than the top card (wraps: Ace can follow King). Refill your hand to 5 from your draw pile whenever possible.',
    },
    {
      phase: 'turn',
      title: 'Restart',
      body: 'If both players are stuck (no legal play), simultaneously flip one card from each side pile onto the center piles to restart action.',
    },
    {
      phase: 'winning',
      title: 'First Empty',
      body: 'First player to empty both their hand and draw pile wins. Slap the center pile to signal you\'re out.',
    },
  ],
  variants: [
    'Spit: similar two-player speed game using 26-card draw piles with different layout rules.',
    'Slam: faster variant where any adjacent rank (±1) can be played regardless of color or suit.',
  ],
};
