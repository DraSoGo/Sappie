'use client';

import { SkipBack, ChevronLeft, Play, Pause, ChevronRight, SkipForward } from 'lucide-react';
import { useVisualizerStore } from '@/store/visualizer';
import { isLastStep } from '@/lib/animator';

export default function PlaybackControls() {
  const { technique, currentStep, isPlaying, play, pause, stepForward, stepBack, reset } =
    useVisualizerStore();

  const atStart = currentStep === 0;
  const atEnd = technique ? isLastStep(technique, currentStep) : true;

  const btnBase =
    'p-2 rounded-lg border transition-colors disabled:opacity-30 disabled:cursor-not-allowed';
  const btnNormal = `${btnBase} border-gold/20 text-card-text hover:border-gold/50 hover:text-gold`;
  const btnPrimary = `${btnBase} border-gold bg-gold/10 text-gold hover:bg-gold/20`;

  return (
    <div className="flex items-center gap-2 justify-center">
      <button onClick={reset} disabled={atStart} className={btnNormal} aria-label="Reset">
        <SkipBack size={16} />
      </button>
      <button onClick={stepBack} disabled={atStart} className={btnNormal} aria-label="Step back">
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={isPlaying ? pause : play}
        disabled={!technique || (atEnd && !isPlaying)}
        className={btnPrimary}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <button
        onClick={stepForward}
        disabled={atEnd}
        className={btnNormal}
        aria-label="Step forward"
      >
        <ChevronRight size={18} />
      </button>
      <button
        onClick={() => {
          if (!technique) return;
          useVisualizerStore.getState().pause();
          useVisualizerStore.setState({ currentStep: technique.steps.length - 1 });
        }}
        disabled={atEnd}
        className={btnNormal}
        aria-label="Skip to end"
      >
        <SkipForward size={16} />
      </button>
    </div>
  );
}
