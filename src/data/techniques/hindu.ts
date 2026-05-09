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

export const hindu: Technique = {
  slug: 'hindu',
  name: 'Hindu Shuffle',
  category: 'shuffle',
  difficulty: 2,
  why: 'The Hindu shuffle is widely used in Asia and among card magicians. It allows precise control over portions of the deck and is the basis for many sleight-of-hand controls. Smooth and elegant when done well.',
  initialCards,
  steps: [
    {
      label: 'Hold the deck loosely face-down, long edges between thumb and fingers',
      duration: 500,
      cards: initialCards,
    },
    {
      label: 'Other hand draws away the top portion of the deck from above',
      duration: 700,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 50, y: 35, rotation: 0, zIndex: 5 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 50, y: 35, rotation: 0, zIndex: 4 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 50, y: 35, rotation: 0, zIndex: 3 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 50, y: 35, rotation: 0, zIndex: 2 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 50, y: 35, rotation: 0, zIndex: 1 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 5 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 4 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 3 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 2 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 1 },
      ],
    },
    {
      label: 'Lower hand releases a small packet from the bottom onto the other hand\'s pile',
      duration: 700,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 5 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 4 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 3 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 2 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 1 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 8 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 7 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 3 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 2 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 1 },
      ],
    },
    {
      label: 'Repeat: draw away remaining cards, drop small packets — deck gradually transfers',
      duration: 900,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 3 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 2 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 1 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 10 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 9 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 8 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 7 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 6 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 5 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 50, y: 42, rotation: 0, zIndex: 4 },
      ],
    },
    {
      label: 'Square and consolidate — Hindu shuffle complete',
      duration: 500,
      cards: initialCards.map((c, i) => ({ ...c, x: 30, y: 42, zIndex: 10 - i })),
    },
  ],
};
