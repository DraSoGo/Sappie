import { Game } from '@/types/game';

export const spades: Game = {
  slug: 'spades',
  name: 'Spades',
  category: 'trick-taking',
  players: { min: 4, max: 4 },
  deckType: 'Standard 52',
  difficulty: 3,
  objective: 'Win exactly the number of tricks your partnership bid, scored over multiple rounds to 500 points.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal and Bid',
      body: 'Deal all 52 cards (13 each). Sitting across from your partner forms your team. Each player bids the number of tricks they expect to win; bids are added per partnership.',
    },
    {
      phase: 'turn',
      title: 'Trick Play',
      body: 'Lead any non-spade card (until spades have been "broken" by discarding one). Follow suit if able; otherwise play any card. Spades always beat non-spades. Highest card of the led suit wins unless a spade is played.',
    },
    {
      phase: 'winning',
      title: 'Scoring',
      body: 'Meeting your bid: 10 points per trick bid. Overtricks (bags) = 1 point each but every 10 bags costs 100 points. Failing to meet bid: −10 per trick bid. Nil bid (0 tricks): +100 if successful, −100 if not. First to 500 wins.',
    },
  ],
  variants: [
    'Cutthroat Spades: each player bids and scores individually; no partnerships.',
    'Blind Nil: bid nil without looking at your cards for +200/−200.',
    'Jokers variant: two jokers added as highest trumps.',
  ],
};
