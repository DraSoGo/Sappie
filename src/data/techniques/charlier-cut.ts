import { Technique, CardState } from '@/types/technique';

const initialCards: CardState[] = [
  { id: 'AS',  suit: 'spades',   rank: 'A',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 10 },
  { id: 'KH',  suit: 'hearts',   rank: 'K',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 9 },
  { id: 'QD',  suit: 'diamonds', rank: 'Q',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 8 },
  { id: 'JC',  suit: 'clubs',    rank: 'J',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 7 },
  { id: '10S', suit: 'spades',   rank: '10', faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 6 },
  { id: '9H',  suit: 'hearts',   rank: '9',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 5 },
  { id: '8D',  suit: 'diamonds', rank: '8',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 4 },
  { id: '7C',  suit: 'clubs',    rank: '7',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 3 },
  { id: '6S',  suit: 'spades',   rank: '6',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 2 },
  { id: '5H',  suit: 'hearts',   rank: '5',  faceUp: false, x: 30, y: 42, rotation: 0, zIndex: 1 },
];

export const charlierCut: Technique = {
  slug: 'charlier-cut',
  name: 'Charlier Cut',
  category: 'flourish',
  difficulty: 2,
  why: 'The Charlier Cut (one-handed cut) is the fundamental one-handed card move. The deck is split and reassembled using only the fingers of one hand — no table needed. It is the gateway flourish to more advanced one-handed moves like the Revolution Cut and Thumb Cut, and doubles as a smooth, casual-looking false cut in magic.',
  initialCards,
  steps: [
    {
      label: 'Rest deck face-down across the four fingers of one hand, thumb resting lightly on top',
      duration: 600,
      cards: initialCards,
    },
    {
      label: 'Thumb releases pressure — bottom half of deck drops, pivoting on the index finger',
      duration: 700,
      cards: [
        { id: 'AS',  suit: 'spades',   rank: 'A',  faceUp: false, x: 30, y: 42, rotation:  0, zIndex: 5 },
        { id: 'KH',  suit: 'hearts',   rank: 'K',  faceUp: false, x: 30, y: 42, rotation:  0, zIndex: 4 },
        { id: 'QD',  suit: 'diamonds', rank: 'Q',  faceUp: false, x: 30, y: 42, rotation:  0, zIndex: 3 },
        { id: 'JC',  suit: 'clubs',    rank: 'J',  faceUp: false, x: 30, y: 42, rotation:  0, zIndex: 2 },
        { id: '10S', suit: 'spades',   rank: '10', faceUp: false, x: 30, y: 42, rotation:  0, zIndex: 1 },
        { id: '9H',  suit: 'hearts',   rank: '9',  faceUp: false, x: 30, y: 54, rotation: 30, zIndex: 5 },
        { id: '8D',  suit: 'diamonds', rank: '8',  faceUp: false, x: 30, y: 54, rotation: 30, zIndex: 4 },
        { id: '7C',  suit: 'clubs',    rank: '7',  faceUp: false, x: 30, y: 54, rotation: 30, zIndex: 3 },
        { id: '6S',  suit: 'spades',   rank: '6',  faceUp: false, x: 30, y: 54, rotation: 30, zIndex: 2 },
        { id: '5H',  suit: 'hearts',   rank: '5',  faceUp: false, x: 30, y: 54, rotation: 30, zIndex: 1 },
      ],
    },
    {
      label: 'Bottom half swings open on index finger — two packets now form a V shape in the hand',
      duration: 700,
      cards: [
        { id: 'AS',  suit: 'spades',   rank: 'A',  faceUp: false, x: 30, y: 38, rotation:  -5, zIndex: 5 },
        { id: 'KH',  suit: 'hearts',   rank: 'K',  faceUp: false, x: 30, y: 38, rotation:  -5, zIndex: 4 },
        { id: 'QD',  suit: 'diamonds', rank: 'Q',  faceUp: false, x: 30, y: 38, rotation:  -5, zIndex: 3 },
        { id: 'JC',  suit: 'clubs',    rank: 'J',  faceUp: false, x: 30, y: 38, rotation:  -5, zIndex: 2 },
        { id: '10S', suit: 'spades',   rank: '10', faceUp: false, x: 30, y: 38, rotation:  -5, zIndex: 1 },
        { id: '9H',  suit: 'hearts',   rank: '9',  faceUp: false, x: 30, y: 58, rotation:  55, zIndex: 5 },
        { id: '8D',  suit: 'diamonds', rank: '8',  faceUp: false, x: 30, y: 58, rotation:  55, zIndex: 4 },
        { id: '7C',  suit: 'clubs',    rank: '7',  faceUp: false, x: 30, y: 58, rotation:  55, zIndex: 3 },
        { id: '6S',  suit: 'spades',   rank: '6',  faceUp: false, x: 30, y: 58, rotation:  55, zIndex: 2 },
        { id: '5H',  suit: 'hearts',   rank: '5',  faceUp: false, x: 30, y: 58, rotation:  55, zIndex: 1 },
      ],
    },
    {
      label: 'Thumb catches the rising bottom packet from below, holding it up',
      duration: 700,
      cards: [
        { id: 'AS',  suit: 'spades',   rank: 'A',  faceUp: false, x: 30, y: 52, rotation:  30, zIndex: 5 },
        { id: 'KH',  suit: 'hearts',   rank: 'K',  faceUp: false, x: 30, y: 52, rotation:  30, zIndex: 4 },
        { id: 'QD',  suit: 'diamonds', rank: 'Q',  faceUp: false, x: 30, y: 52, rotation:  30, zIndex: 3 },
        { id: 'JC',  suit: 'clubs',    rank: 'J',  faceUp: false, x: 30, y: 52, rotation:  30, zIndex: 2 },
        { id: '10S', suit: 'spades',   rank: '10', faceUp: false, x: 30, y: 52, rotation:  30, zIndex: 1 },
        { id: '9H',  suit: 'hearts',   rank: '9',  faceUp: false, x: 30, y: 42, rotation:   0, zIndex: 5 },
        { id: '8D',  suit: 'diamonds', rank: '8',  faceUp: false, x: 30, y: 42, rotation:   0, zIndex: 4 },
        { id: '7C',  suit: 'clubs',    rank: '7',  faceUp: false, x: 30, y: 42, rotation:   0, zIndex: 3 },
        { id: '6S',  suit: 'spades',   rank: '6',  faceUp: false, x: 30, y: 42, rotation:   0, zIndex: 2 },
        { id: '5H',  suit: 'hearts',   rank: '5',  faceUp: false, x: 30, y: 42, rotation:   0, zIndex: 1 },
      ],
    },
    {
      label: 'Original top packet falls through — both halves land flush, cut complete one-handed',
      duration: 700,
      cards: initialCards.map((c, i) => ({ ...c, x: 30, y: 42, rotation: 0, zIndex: 10 - i })),
    },
  ],
};
