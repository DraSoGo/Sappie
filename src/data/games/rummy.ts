import { Game } from '@/types/game';

export const rummy: Game = {
  slug: 'rummy',
  name: 'Rummy',
  category: 'matching',
  players: { min: 2, max: 6 },
  deckType: 'Standard 52',
  difficulty: 2,
  objective: 'Be the first to empty your hand by forming valid sets and runs and discarding all cards.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal',
      body: 'Deal 10 cards each (2 players), 7 each (3–4 players), or 6 each (5–6 players). Place remaining cards face-down as draw pile; flip top card to start discard pile.',
    },
    {
      phase: 'turn',
      title: 'Draw and Meld',
      body: 'On your turn: draw from the draw pile or top of discard pile. Lay down melds (sets of 3+ same rank, or runs of 3+ consecutive same-suit cards). Add cards to existing melds on the table. Discard one card to end your turn.',
    },
    {
      phase: 'winning',
      title: 'Going Out',
      body: 'Win by emptying your hand entirely (going out). Score points equal to the total face value of unmelded cards in opponents\' hands. Aces = 1, face cards = 10, others = face value.',
    },
  ],
  variants: [
    'Gin Rummy: no laying off on opponents\' melds; knock when unmatched cards total 10 or less.',
    'Rummy 500: play to 500 points across multiple hands; melds score positively, unmelded cards negatively.',
    'Indian Rummy: two decks, two jokers; must have at least one pure sequence to declare.',
  ],
};
