import { Technique, CardState } from '@/types/technique';

const initialCards: CardState[] = [
  { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 10 },
  { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 9 },
  { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 8 },
  { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 7 },
  { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 6 },
  { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 5 },
  { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 4 },
  { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 3 },
  { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 2 },
  { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 1 },
];

export const fan: Technique = {
  slug: 'fan',
  name: 'Card Fan',
  category: 'flourish',
  difficulty: 2,
  why: 'The card fan is the most recognisable card flourish — spreading the deck into a perfect arc. It\'s used by magicians to offer a spectator a "free choice" of card, and by card handlers to display the full deck elegantly. A smooth fan requires a well-conditioned deck and consistent thumb pressure.',
  initialCards,
  steps: [
    {
      label: 'Hold deck face-down in the left hand, pinched between thumb (below) and fingers (above)',
      duration: 500,
      cards: initialCards,
    },
    {
      label: 'Right thumb presses against the bottom-right corner of the deck as an anchor pivot point',
      duration: 600,
      cards: initialCards.map((c, i) => ({
        ...c,
        x: 30,
        y: 42,
        rotation: i * 0,
        zIndex: 10 - i,
      })),
    },
    {
      label: 'Left fingers begin pushing cards in a semicircular arc to the right — first cards spread',
      duration: 800,
      cards: [
        { id: 'AS',  suit: 'spades',   rank: 'A',  faceUp: false, x: 30, y: 42, rotation: -36, zIndex: 10 },
        { id: 'KH',  suit: 'hearts',   rank: 'K',  faceUp: false, x: 31, y: 42, rotation: -28, zIndex: 9 },
        { id: 'QD',  suit: 'diamonds', rank: 'Q',  faceUp: false, x: 32, y: 42, rotation: -20, zIndex: 8 },
        { id: 'JC',  suit: 'clubs',    rank: 'J',  faceUp: false, x: 33, y: 42, rotation: -12, zIndex: 7 },
        { id: '10S', suit: 'spades',   rank: '10', faceUp: false, x: 34, y: 42, rotation:  -4, zIndex: 6 },
        { id: '9H',  suit: 'hearts',   rank: '9',  faceUp: false, x: 34, y: 42, rotation:   4, zIndex: 5 },
        { id: '8D',  suit: 'diamonds', rank: '8',  faceUp: false, x: 33, y: 42, rotation:  12, zIndex: 4 },
        { id: '7C',  suit: 'clubs',    rank: '7',  faceUp: false, x: 32, y: 42, rotation:  20, zIndex: 3 },
        { id: '6S',  suit: 'spades',   rank: '6',  faceUp: false, x: 31, y: 42, rotation:  28, zIndex: 2 },
        { id: '5H',  suit: 'hearts',   rank: '5',  faceUp: false, x: 30, y: 42, rotation:  36, zIndex: 1 },
      ],
    },
    {
      label: 'Continue arc — full semicircular fan open, cards evenly spaced',
      duration: 700,
      cards: [
        { id: 'AS',  suit: 'spades',   rank: 'A',  faceUp: false, x: 25, y: 55, rotation: -80, zIndex: 10 },
        { id: 'KH',  suit: 'hearts',   rank: 'K',  faceUp: false, x: 27, y: 50, rotation: -62, zIndex: 9 },
        { id: 'QD',  suit: 'diamonds', rank: 'Q',  faceUp: false, x: 29, y: 46, rotation: -44, zIndex: 8 },
        { id: 'JC',  suit: 'clubs',    rank: 'J',  faceUp: false, x: 31, y: 43, rotation: -26, zIndex: 7 },
        { id: '10S', suit: 'spades',   rank: '10', faceUp: false, x: 33, y: 41, rotation:  -8, zIndex: 6 },
        { id: '9H',  suit: 'hearts',   rank: '9',  faceUp: false, x: 36, y: 41, rotation:  10, zIndex: 5 },
        { id: '8D',  suit: 'diamonds', rank: '8',  faceUp: false, x: 38, y: 43, rotation:  28, zIndex: 4 },
        { id: '7C',  suit: 'clubs',    rank: '7',  faceUp: false, x: 40, y: 46, rotation:  46, zIndex: 3 },
        { id: '6S',  suit: 'spades',   rank: '6',  faceUp: false, x: 42, y: 50, rotation:  64, zIndex: 2 },
        { id: '5H',  suit: 'hearts',   rank: '5',  faceUp: false, x: 44, y: 55, rotation:  82, zIndex: 1 },
      ],
    },
    {
      label: 'Fan complete — pivot thumb closes the arc back into a squared deck',
      duration: 800,
      cards: initialCards.map((c, i) => ({ ...c, x: 30, y: 42, rotation: 0, zIndex: 10 - i })),
    },
  ],
};
