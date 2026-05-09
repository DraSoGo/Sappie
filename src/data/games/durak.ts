import { Game } from '@/types/game';

export const durak: Game = {
  slug: 'durak',
  name: 'Durak',
  category: 'shedding',
  players: { min: 2, max: 6 },
  deckType: '36-card (6s and up)',
  difficulty: 2,
  objective: 'Get rid of all your cards before other players; the last player holding cards is the "durak" (fool).',
  rules: [
    {
      phase: 'setup',
      title: 'Deal and Trump',
      body: 'Use a 36-card deck (6 through Ace). Deal 6 cards to each player. Flip bottom card of remaining deck face-up — its suit is trump. Slide it under the deck (still visible). Player with lowest trump card attacks first.',
    },
    {
      phase: 'turn',
      title: 'Attack and Defend',
      body: 'Attacker plays a card to the center. Defender must beat it with a higher card of the same suit or any trump card. Defender may also choose not to defend ("take"), picking up all cards. Attacker may add cards of ranks already on the table (up to 6 total attacks).',
    },
    {
      phase: 'turn',
      title: 'Replenish',
      body: 'After each round, all players draw up to 6 cards from the deck (attacker first, then others, defender last or not at all if they took cards).',
    },
    {
      phase: 'winning',
      title: 'Losing',
      body: 'No winner — the game finds a loser. When the deck empties, players shed cards until only one remains. That player is the Durak and loses the round.',
    },
  ],
  variants: [
    'Podkidnoy Durak (throw-in): other players may assist attacker by adding matching-rank cards.',
    'Perevodnoy Durak (transfer): defender may transfer the attack to the next player by matching rank.',
  ],
};
