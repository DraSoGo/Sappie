import { Game } from '@/types/game';

export const oldMaid: Game = {
  slug: 'old-maid',
  name: 'Old Maid',
  category: 'matching',
  players: { min: 2, max: 8 },
  deckType: 'Standard 52 (one Queen removed)',
  difficulty: 1,
  objective: 'Match and discard all your cards; avoid being the player left holding the unmatched Queen.',
  rules: [
    {
      phase: 'setup',
      title: 'Prepare Deck',
      body: 'Remove one Queen from the deck, leaving 51 cards. Deal all cards among players as evenly as possible.',
    },
    {
      phase: 'turn',
      title: 'Discard Pairs',
      body: 'Each player sorts their hand and discards all matching pairs (same rank) face-up immediately. Then, starting with the dealer, each player fans their hand face-down and the next player draws one card. If it pairs with a card they hold, discard the pair.',
    },
    {
      phase: 'winning',
      title: 'Old Maid',
      body: 'Players who empty their hand are safe and out. The single player left holding the unmatched Queen is the Old Maid and loses.',
    },
  ],
  variants: [
    'Black Peter: uses a special illustrated deck with one unmatchable "Black Peter" card.',
    'Scumbag (Taro variant): similar mechanic using a Joker as the unmatchable card.',
  ],
};
