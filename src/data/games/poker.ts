import { Game } from '@/types/game';

export const poker: Game = {
  slug: 'texas-holdem',
  name: 'Poker — Texas Hold\'em',
  category: 'casino',
  players: { min: 2, max: 10 },
  deckType: 'Standard 52',
  difficulty: 3,
  objective: 'Win chips by holding the best five-card hand or by making all other players fold.',
  rules: [
    {
      phase: 'setup',
      title: 'Blinds & Deal',
      body: 'Two players post forced bets (small blind, big blind). Each player receives 2 hole cards face-down.',
    },
    {
      phase: 'setup',
      title: 'Button',
      body: 'A dealer button rotates clockwise each hand. The two players to the left of the button post the blinds.',
    },
    {
      phase: 'turn',
      title: 'Betting Rounds',
      body: 'Four betting rounds: Pre-Flop (before community cards), Flop (3 cards revealed), Turn (1 card), River (1 card). Players may fold, call, raise, or check.',
    },
    {
      phase: 'turn',
      title: 'Community Cards',
      body: 'Five community cards are dealt face-up in three stages. Players combine any of their 2 hole cards with any 3 community cards to make the best 5-card hand.',
    },
    {
      phase: 'winning',
      title: 'Showdown',
      body: 'After the final betting round, remaining players reveal hands. Best 5-card hand wins the pot. Hand rankings: Royal Flush > Straight Flush > Four of a Kind > Full House > Flush > Straight > Three of a Kind > Two Pair > Pair > High Card.',
    },
  ],
  variants: [
    'Pot-Limit Omaha: players receive 4 hole cards and must use exactly 2.',
    'Seven-Card Stud: no community cards; each player builds hand from 7 dealt cards.',
    'Short Deck: 36-card deck (6s and below removed), alters hand rankings.',
  ],
  tags: ['popular', 'betting', 'bluffing'],
};
