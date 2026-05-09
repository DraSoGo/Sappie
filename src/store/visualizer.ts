'use client';

import { create } from 'zustand';
import { Technique } from '@/types/technique';

interface VisualizerState {
  technique: Technique | null;
  currentStep: number;
  isPlaying: boolean;
  speed: number;
  intervalId: ReturnType<typeof setInterval> | null;

  setTechnique: (t: Technique) => void;
  play: () => void;
  pause: () => void;
  stepForward: () => void;
  stepBack: () => void;
  reset: () => void;
  setSpeed: (s: number) => void;
}

export const useVisualizerStore = create<VisualizerState>((set, get) => ({
  technique: null,
  currentStep: 0,
  isPlaying: false,
  speed: 1,
  intervalId: null,

  setTechnique: (t) => {
    const { intervalId } = get();
    if (intervalId) clearInterval(intervalId);
    set({ technique: t, currentStep: 0, isPlaying: false, intervalId: null });
  },

  play: () => {
    const { technique, currentStep, speed, intervalId } = get();
    if (!technique) return;
    if (currentStep >= technique.steps.length - 1) return;
    if (intervalId) clearInterval(intervalId);

    const tick = () => {
      const state = get();
      if (!state.technique) return;
      const nextStep = state.currentStep + 1;
      if (nextStep >= state.technique.steps.length) {
        const id = get().intervalId;
        if (id) clearInterval(id);
        set({ isPlaying: false, intervalId: null });
        return;
      }
      const stepDuration = state.technique.steps[state.currentStep].duration / state.speed;
      set({ currentStep: nextStep });
      const newId = setTimeout(tick, state.technique.steps[nextStep].duration / state.speed);
      set({ intervalId: newId as unknown as ReturnType<typeof setInterval> });
    };

    const stepDuration = technique.steps[currentStep].duration / speed;
    const id = setTimeout(tick, stepDuration);
    set({ isPlaying: true, intervalId: id as unknown as ReturnType<typeof setInterval> });
  },

  pause: () => {
    const { intervalId } = get();
    if (intervalId) clearInterval(intervalId);
    set({ isPlaying: false, intervalId: null });
  },

  stepForward: () => {
    const { technique, currentStep, intervalId } = get();
    if (!technique) return;
    if (currentStep >= technique.steps.length - 1) return;
    if (intervalId) clearInterval(intervalId);
    set({ currentStep: currentStep + 1, isPlaying: false, intervalId: null });
  },

  stepBack: () => {
    const { currentStep, intervalId } = get();
    if (currentStep <= 0) return;
    if (intervalId) clearInterval(intervalId);
    set({ currentStep: currentStep - 1, isPlaying: false, intervalId: null });
  },

  reset: () => {
    const { intervalId } = get();
    if (intervalId) clearInterval(intervalId);
    set({ currentStep: 0, isPlaying: false, intervalId: null });
  },

  setSpeed: (s) => {
    const { isPlaying } = get();
    set({ speed: s });
    if (isPlaying) {
      get().pause();
      get().play();
    }
  },
}));
