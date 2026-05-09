'use client';

import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useVisualizerStore } from '@/store/visualizer';
import { getTransitionDuration } from '@/lib/animator';
import CardComponent from './CardComponent';
import TechniqueSelector from './TechniqueSelector';
import PlaybackControls from './PlaybackControls';
import SpeedSlider from './SpeedSlider';
import StepDescription from './StepDescription';

export default function Visualizer({ defaultSlug }: { defaultSlug?: string }) {
  const { technique, currentStep, speed, setTechnique, play, pause, stepForward, stepBack } =
    useVisualizerStore();

  useEffect(() => {
    if (defaultSlug && !technique) {
      import('@/data/techniques').then(({ getTechniqueBySlug }) => {
        const t = getTechniqueBySlug(defaultSlug);
        if (t) setTechnique(t);
      });
    }
  }, [defaultSlug, technique, setTechnique]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        const state = useVisualizerStore.getState();
        state.isPlaying ? pause() : play();
      }
      if (e.code === 'ArrowRight') {
        e.preventDefault();
        stepForward();
      }
      if (e.code === 'ArrowLeft') {
        e.preventDefault();
        stepBack();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [play, pause, stepForward, stepBack]);

  const currentCards =
    technique && technique.steps[currentStep]
      ? technique.steps[currentStep].cards
      : technique
        ? technique.initialCards
        : [];

  const transitionDuration =
    technique && technique.steps[currentStep]
      ? getTransitionDuration(technique.steps[currentStep], speed)
      : 600;

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full">
      {/* Sidebar */}
      <aside className="lg:w-52 flex-shrink-0 bg-felt-dark border border-gold/10 rounded-xl p-3">
        <TechniqueSelector />
      </aside>

      {/* Main panel */}
      <div className="flex-1 flex flex-col gap-4 min-w-0">
        {/* Animation canvas */}
        <div
          className="relative bg-felt-mid border border-gold/10 rounded-xl overflow-hidden"
          style={{ height: '320px' }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {!technique && (
              <p className="text-card-text/20 text-sm">Select a technique from the sidebar</p>
            )}
          </div>
          <AnimatePresence>
            {currentCards.map((card) => (
              <CardComponent
                key={card.id}
                {...card}
                transitionDuration={transitionDuration}
              />
            ))}
          </AnimatePresence>

          {/* Zone labels */}
          <div className="absolute bottom-2 left-3 text-xs text-card-text/20 pointer-events-none">
            Table
          </div>
        </div>

        {/* Why this technique */}
        {technique && (
          <details className="bg-felt-mid border border-gold/10 rounded-lg px-4 py-2 text-sm text-card-text/60 group">
            <summary className="cursor-pointer list-none flex items-center gap-1 text-gold/70 text-xs font-semibold uppercase tracking-wider">
              Why this technique?
            </summary>
            <p className="mt-2 text-card-text/70 leading-relaxed">{technique.why}</p>
          </details>
        )}

        {/* Step description */}
        <StepDescription />

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-felt-mid border border-gold/10 rounded-xl px-4 py-3">
          <PlaybackControls />
          <SpeedSlider />
        </div>
      </div>
    </div>
  );
}
