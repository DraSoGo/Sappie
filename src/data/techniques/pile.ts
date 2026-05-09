import { Technique, CardState } from '@/types/technique';

const initialCards: CardState[] = [
  { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 10 },
  { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 9 },
  { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 8 },
  { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 7 },
  { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 6 },
  { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 5 },
  { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 4 },
  { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 3 },
  { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 2 },
  { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 1 },
];

export const pile: Technique = {
  slug: 'pile',
  name: 'Pile Shuffle',
  category: 'shuffle',
  difficulty: 1,
  why: 'The pile shuffle is the most thorough shuffle for ensuring every card is separated from its neighbours. Dealing cards into multiple piles guarantees no two cards that were adjacent remain adjacent, making it ideal for a new deck or after a game with long runs.',
  initialCards,
  steps: [
    {
      label: 'Start with deck in hand — deal cards one at a time into separate face-down piles',
      duration: 600,
      cards: initialCards,
    },
    {
      label: 'Deal first 4 cards to 4 different piles across the table',
      duration: 900,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 30, y: 42, rotation: 2, zIndex: 1 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 45, y: 42, rotation: -1, zIndex: 1 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 60, y: 42, rotation: 3, zIndex: 1 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 75, y: 42, rotation: -2, zIndex: 1 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 6 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 5 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 4 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 3 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 2 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 10, y: 42, rotation: 0, zIndex: 1 },
      ],
    },
    {
      label: 'Continue dealing remaining cards cyclically across all 4 piles',
      duration: 900,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 30, y: 42, rotation: 2, zIndex: 3 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 45, y: 42, rotation: -1, zIndex: 3 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 60, y: 42, rotation: 3, zIndex: 3 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 75, y: 42, rotation: -2, zIndex: 3 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 30, y: 42, rotation: -3, zIndex: 2 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 45, y: 42, rotation: 1, zIndex: 2 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 60, y: 42, rotation: -1, zIndex: 2 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 75, y: 42, rotation: 2, zIndex: 2 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 30, y: 42, rotation: 1, zIndex: 1 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 45, y: 42, rotation: -2, zIndex: 1 },
      ],
    },
    {
      label: 'Stack piles on top of each other in random order to reassemble deck',
      duration: 800,
      cards: [
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 10 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 9 },
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 8 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 7 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 6 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 5 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 4 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 3 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 2 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 1 },
      ],
    },
  ],
};
