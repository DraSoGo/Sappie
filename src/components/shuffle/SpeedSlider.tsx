'use client';

import { useVisualizerStore } from '@/store/visualizer';

const speeds = [0.5, 1, 1.5, 2, 3];

export default function SpeedSlider() {
  const { speed, setSpeed } = useVisualizerStore();

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-card-text/50 whitespace-nowrap">Speed</span>
      <input
        type="range"
        min={0}
        max={speeds.length - 1}
        step={1}
        value={speeds.indexOf(speed) === -1 ? 1 : speeds.indexOf(speed)}
        onChange={(e) => setSpeed(speeds[Number(e.target.value)])}
        className="w-24 accent-gold cursor-pointer"
      />
      <span className="text-xs text-gold font-mono w-8">{speed}×</span>
    </div>
  );
}
