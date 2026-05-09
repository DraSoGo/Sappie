import { Game } from '@/types/game';

export const crazyEights: Game = {
  slug: 'crazy-eights',
  name: 'Crazy Eights',
  category: 'shedding',
  players: { min: 2, max: 8 },
  deckType: 'Standard 52',
  difficulty: 1,
  objective: 'Be the first player to discard all cards from your hand.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal',
      body: 'Deal 8 cards to each player (5 cards for 3+ players). Place remaining cards as draw pile; flip one card to start discard pile.',
    },
    {
      phase: 'turn',
      title: 'Play or Draw',
      body: 'Play a card matching the top discard by rank or suit. Eights are wild — play an 8 at any time and declare the new suit. If unable to play, draw from the pile until a playable card is found.',
    },
    {
      phase: 'winning',
      title: 'Going Out',
      body: 'First player to empty their hand wins. In multi-round play, score points equal to cards remaining in opponents\' hands (Eights = 50, face cards = 10, others = face value).',
    },
  ],
  variants: [
    'Uno: commercial version with action cards (Skip, Reverse, Draw 2, Wild Draw 4).',
    'Swedish Rummy: adds extra effects — 2s force next player to draw 2, Queens skip turns.',
  ],
};
