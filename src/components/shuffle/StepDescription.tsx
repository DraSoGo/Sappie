'use client';

import { useVisualizerStore } from '@/store/visualizer';

export default function StepDescription() {
  const { technique, currentStep } = useVisualizerStore();

  if (!technique) {
    return (
      <div className="text-card-text/30 text-sm text-center py-4">
        Select a technique to begin.
      </div>
    );
  }

  const step = technique.steps[currentStep];
  const total = technique.steps.length;

  return (
    <div className="bg-felt-mid border border-gold/10 rounded-lg px-4 py-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-card-text/40 font-mono">
          Step {currentStep + 1} of {total}
        </span>
        <span className="text-xs text-gold/60">{technique.name}</span>
      </div>
      <p className="text-card-text text-sm leading-relaxed">{step.label}</p>
    </div>
  );
}
