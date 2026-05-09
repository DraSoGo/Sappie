import { Game } from '@/types/game';

export const blackjack: Game = {
  slug: 'blackjack',
  name: 'Blackjack',
  category: 'casino',
  players: { min: 1, max: 7 },
  deckType: 'Standard 52 (1–8 decks)',
  difficulty: 2,
  objective: 'Beat the dealer by getting a hand value closer to 21 without exceeding it.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal',
      body: 'Each player and the dealer receive two cards. Players\' cards are face-up; dealer shows one card face-up and one face-down (the hole card).',
    },
    {
      phase: 'turn',
      title: 'Player Actions',
      body: 'On your turn choose: Hit (take a card), Stand (keep current hand), Double Down (double your bet, take exactly one more card), or Split (if you have a pair, split into two hands). Number cards = face value, face cards = 10, Ace = 1 or 11.',
    },
    {
      phase: 'turn',
      title: 'Dealer Rules',
      body: 'After all players act, the dealer reveals the hole card. Dealer must hit on 16 or below and stand on 17 or above.',
    },
    {
      phase: 'winning',
      title: 'Outcome',
      body: 'Beat the dealer by having a higher hand value without busting (exceeding 21). A natural Blackjack (Ace + 10-value card) pays 3:2. Tie (push) returns your bet. Going over 21 is a bust and you lose immediately.',
    },
  ],
  variants: [
    'European Blackjack: dealer does not peek for blackjack; no hole card dealt until players act.',
    'Pontoon: both dealer cards face-down; "pontoon" (blackjack) and "five-card trick" are special hands.',
    'Spanish 21: played with 48-card Spanish decks (10s removed); bonus payouts for special hands.',
  ],
};
