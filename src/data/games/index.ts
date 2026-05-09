import { Game } from '@/types/game';
import { poker } from './poker';
import { blackjack } from './blackjack';
import { rummy } from './rummy';
import { goFish } from './go-fish';
import { war } from './war';
import { snap } from './snap';
import { solitaire } from './solitaire';
import { crazyEights } from './crazy-eights';
import { spades } from './spades';
import { hearts } from './hearts';
import { bridge } from './bridge';
import { durak } from './durak';
import { oldMaid } from './old-maid';
import { sevens } from './sevens';
import { speed } from './speed';

export const allGames: Game[] = [
  poker,
  blackjack,
  rummy,
  goFish,
  war,
  snap,
  solitaire,
  crazyEights,
  spades,
  hearts,
  bridge,
  durak,
  oldMaid,
  sevens,
  speed,
];

export function getGameBySlug(slug: string): Game | undefined {
  return allGames.find((g) => g.slug === slug);
}
