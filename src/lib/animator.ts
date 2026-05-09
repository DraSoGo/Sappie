import { Step, Technique } from '@/types/technique';

export function getTransitionDuration(step: Step, speed: number): number {
  return step.duration / speed;
}

export function isLastStep(technique: Technique, currentStep: number): boolean {
  return currentStep >= technique.steps.length - 1;
}
