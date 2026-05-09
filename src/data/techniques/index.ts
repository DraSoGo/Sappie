import { Technique } from '@/types/technique';
import { overhand } from './overhand';
import { riffle } from './riffle';
import { hindu } from './hindu';
import { pile } from './pile';
import { faro } from './faro';
import { wash } from './wash';
import { roundRobin } from './round-robin';
import { batch } from './batch';
import { stud } from './stud';
import { burn } from './burn';
import { fan } from './fan';
import { spring } from './spring';
import { charlierCut } from './charlier-cut';

export const allTechniques: Technique[] = [
  overhand,
  riffle,
  hindu,
  pile,
  faro,
  wash,
  roundRobin,
  batch,
  stud,
  burn,
  fan,
  spring,
  charlierCut,
];

export const shuffleTechniques = allTechniques.filter((t) => t.category === 'shuffle');
export const dealTechniques = allTechniques.filter((t) => t.category === 'deal');
export const flourishTechniques = allTechniques.filter((t) => t.category === 'flourish');

export function getTechniqueBySlug(slug: string): Technique | undefined {
  return allTechniques.find((t) => t.slug === slug);
}
