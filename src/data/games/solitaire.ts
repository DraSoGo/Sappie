import { Game } from '@/types/game';

export const solitaire: Game = {
  slug: 'solitaire',
  name: 'Solitaire — Klondike',
  category: 'patience',
  players: { min: 1, max: 1 },
  deckType: 'Standard 52',
  difficulty: 2,
  objective: 'Move all 52 cards onto four foundation piles, sorted by suit from Ace to King.',
  rules: [
    {
      phase: 'setup',
      title: 'Layout',
      body: 'Deal 7 tableau columns: 1 card in column 1, 2 in column 2, … 7 in column 7. Only the top card of each column is face-up. The remaining cards form the stock pile.',
    },
    {
      phase: 'turn',
      title: 'Moves',
      body: 'Build tableau columns in descending order, alternating red and black (e.g., black 9 on red 10). Move face-up card sequences as a unit. Flip face-down cards when exposed. Draw from stock to a waste pile (1 or 3 cards at a time). Empty columns may only be filled with a King.',
    },
    {
      phase: 'winning',
      title: 'Foundation Build',
      body: 'Move Aces to four foundation spaces when revealed, then build each foundation up by suit (A→2→…→K). Win when all four foundations reach King.',
    },
  ],
  variants: [
    'Draw 3: draw three cards at a time from stock instead of one; harder, more traditional.',
    'Spider Solitaire: uses two decks; build complete suit sequences in tableau instead of foundations.',
    'FreeCell: all cards face-up; four free cells allow temporary card storage.',
  ],
};
