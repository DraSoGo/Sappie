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

export const wash: Technique = {
  slug: 'wash',
  name: 'Wash Shuffle',
  category: 'shuffle',
  difficulty: 1,
  why: 'The wash shuffle (also called the scramble or Chemmy shuffle) is the standard way to break in a new deck or reset after a game where cards were grouped by suit. Spreading and swirling cards face-down on a flat surface guarantees thorough randomisation before any structured shuffling.',
  initialCards,
  steps: [
    {
      label: 'Spread all cards face-down across the table surface',
      duration: 800,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 10, y: 30, rotation: 15, zIndex: 1 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 25, y: 25, rotation: -20, zIndex: 2 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 40, y: 35, rotation: 35, zIndex: 3 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 55, y: 28, rotation: -10, zIndex: 4 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 70, y: 32, rotation: 25, zIndex: 5 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 15, y: 55, rotation: -30, zIndex: 6 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 35, y: 58, rotation: 18, zIndex: 7 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 50, y: 52, rotation: -45, zIndex: 8 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 65, y: 60, rotation: 12, zIndex: 9 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 80, y: 50, rotation: -22, zIndex: 10 },
      ],
    },
    {
      label: 'Use both hands to swirl and mix cards in circular motions — about 5 seconds',
      duration: 1200,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 60, y: 55, rotation: -40, zIndex: 7 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 20, y: 45, rotation: 55, zIndex: 3 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 75, y: 30, rotation: -15, zIndex: 9 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 40, y: 60, rotation: 30, zIndex: 1 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 10, y: 35, rotation: -60, zIndex: 5 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 55, y: 42, rotation: 20, zIndex: 10 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 30, y: 28, rotation: -35, zIndex: 2 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 68, y: 58, rotation: 50, zIndex: 6 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 45, y: 38, rotation: -25, zIndex: 4 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 22, y: 62, rotation: 40, zIndex: 8 },
      ],
    },
    {
      label: 'Gather cards from the edges inward into a rough pile',
      duration: 800,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 35, y: 44, rotation: -5, zIndex: 7 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 33, y: 43, rotation: 8, zIndex: 3 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 37, y: 45, rotation: -12, zIndex: 9 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 32, y: 42, rotation: 3, zIndex: 1 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 36, y: 44, rotation: -8, zIndex: 5 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 34, y: 43, rotation: 15, zIndex: 10 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 38, y: 45, rotation: -3, zIndex: 2 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 33, y: 44, rotation: 7, zIndex: 6 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 35, y: 42, rotation: -10, zIndex: 4 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 36, y: 43, rotation: 2, zIndex: 8 },
      ],
    },
    {
      label: 'Square up the deck — wash shuffle complete',
      duration: 600,
      cards: initialCards.map((c, i) => ({ ...c, x: 30, y: 42, rotation: 0, zIndex: 10 - i })),
    },
  ],
};
