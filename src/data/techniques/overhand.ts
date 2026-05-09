import { Technique, CardState } from '@/types/technique';

const deck: CardState[] = [
  { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 10 },
  { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 9 },
  { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 8 },
  { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 7 },
  { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 6 },
  { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 5 },
  { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 4 },
  { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 3 },
  { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 2 },
  { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 1 },
];

export const overhand: Technique = {
  slug: 'overhand',
  name: 'Overhand Shuffle',
  category: 'shuffle',
  difficulty: 1,
  why: 'The overhand shuffle is the most common shuffle for casual players. While not the most randomising, it\'s intuitive and requires no table. Cards are simply transferred in small packets from one hand to the other repeatedly.',
  initialCards: deck,
  steps: [
    {
      label: 'Hold deck face-down in your dominant hand, gripped at the short edges',
      duration: 600,
      cards: deck.map((c) => ({ ...c, x: 20, y: 40, rotation: 0 })),
    },
    {
      label: 'With your other hand, grip a small packet from the bottom of the deck',
      duration: 700,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 40, y: 38, rotation: -3, zIndex: 10 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 40, y: 39, rotation: -2, zIndex: 9 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 40, y: 40, rotation: -1, zIndex: 8 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 20, y: 41, rotation: 1, zIndex: 7 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 20, y: 42, rotation: 2, zIndex: 6 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 20, y: 43, rotation: 1, zIndex: 5 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 20, y: 44, rotation: 0, zIndex: 4 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 20, y: 45, rotation: -1, zIndex: 3 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 20, y: 46, rotation: 0, zIndex: 2 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 20, y: 47, rotation: 1, zIndex: 1 },
      ],
    },
    {
      label: 'Drop the packet on top of the remaining cards, offsetting slightly',
      duration: 500,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 7 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 6 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 5 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 10 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 9 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 8 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 4 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 3 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 2 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 1 },
      ],
    },
    {
      label: 'Grip another small packet and drop it on top — repeat 6–8 times',
      duration: 700,
      cards: [
        { id: 'AS', suit: 'spades', rank: 'A', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 4 },
        { id: 'KH', suit: 'hearts', rank: 'K', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 3 },
        { id: 'QD', suit: 'diamonds', rank: 'Q', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 2 },
        { id: 'JC', suit: 'clubs', rank: 'J', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 7 },
        { id: '10S', suit: 'spades', rank: '10', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 6 },
        { id: '9H', suit: 'hearts', rank: '9', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 5 },
        { id: '8D', suit: 'diamonds', rank: '8', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 10 },
        { id: '7C', suit: 'clubs', rank: '7', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 9 },
        { id: '6S', suit: 'spades', rank: '6', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 8 },
        { id: '5H', suit: 'hearts', rank: '5', faceUp: false, x: 20, y: 40, rotation: 0, zIndex: 1 },
      ],
    },
    {
      label: 'Square up the deck — overhand shuffle complete',
      duration: 500,
      cards: deck.map((c, i) => ({ ...c, x: 20, y: 40, rotation: 0, zIndex: 10 - i })),
    },
  ],
};
