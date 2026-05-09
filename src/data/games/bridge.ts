import { Game } from '@/types/game';

export const bridge: Game = {
  slug: 'bridge',
  name: 'Bridge',
  category: 'trick-taking',
  players: { min: 4, max: 4 },
  deckType: 'Standard 52',
  difficulty: 5,
  objective: 'Win the number of tricks bid in the auction phase, scored across multiple deals toward game and rubber.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal and Auction',
      body: 'Four players in two partnerships (North-South, East-West). Deal 13 cards each. An auction (bidding) follows clockwise — bids name a trump suit (or No Trump) and the minimum number of tricks above 6. Highest bid becomes the contract; that partnership\'s highest bidder is the Declarer.',
    },
    {
      phase: 'turn',
      title: 'Play',
      body: 'Declarer\'s partner (Dummy) lays cards face-up after the opening lead; Declarer plays both hands. Follow suit if able. Trump suit beats other suits. Highest card of led suit wins unless trumped.',
    },
    {
      phase: 'winning',
      title: 'Scoring',
      body: 'Making the contract earns trick points and possibly bonus points (game, slam). Failing costs points to defenders. Scoring is complex; simplified: 1 minor-suit trick = 20 pts, major suit = 30 pts. Game = 100 points; rubber = winning 2 of 3 games.',
    },
  ],
  variants: [
    'Duplicate Bridge: same deals played at multiple tables; compare scores to remove luck element.',
    'Chicago Bridge (Four-Deal Bridge): 4-deal rounds with fixed vulnerability; no rubber.',
    'Minibridge: simplified version without bidding; used to teach beginners.',
  ],
};
