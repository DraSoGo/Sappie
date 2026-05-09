import { Game } from '@/types/game';

export const snap: Game = {
  slug: 'snap',
  name: 'Snap',
  category: 'matching',
  players: { min: 2, max: 8 },
  deckType: 'Standard 52',
  difficulty: 1,
  objective: 'Collect all cards by being the fastest to call "Snap!" when matching cards appear.',
  rules: [
    {
      phase: 'setup',
      title: 'Deal',
      body: 'Deal all cards face-down as evenly as possible. Players keep their cards in a personal pile without looking at them.',
    },
    {
      phase: 'turn',
      title: 'Play',
      body: 'Players take turns flipping the top card from their pile onto a central face-up pile. Cards are revealed quickly and clearly.',
    },
    {
      phase: 'turn',
      title: 'Snap!',
      body: 'When the top card of the central pile matches the card just played (same rank), the first player to slap the pile and shout "Snap!" wins the entire central pile and adds it to the bottom of their hand.',
    },
    {
      phase: 'winning',
      title: 'Victory',
      body: 'Win by collecting all cards. A player who runs out of cards is eliminated. False snaps (no match) result in giving one card from your pile to each other player.',
    },
  ],
  variants: [
    'Snap Pool: instead of one central pile, each player has their own face-up pile; snap any two matching top cards.',
    'Egyptian Ratscrew: adds combo rules — slap on doubles, sandwiches (e.g., 7-X-7), and sequences.',
  ],
};
