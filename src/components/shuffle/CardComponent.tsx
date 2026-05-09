'use client';

import { motion } from 'framer-motion';
import { CardState } from '@/types/technique';

interface Props extends CardState {
  transitionDuration: number;
}

const suitSymbol: Record<string, string> = {
  spades: '♠',
  hearts: '♥',
  diamonds: '♦',
  clubs: '♣',
};

const suitColor: Record<string, string> = {
  spades: 'text-gray-900',
  clubs: 'text-gray-900',
  hearts: 'text-red-600',
  diamonds: 'text-red-600',
};

export default function CardComponent({
  id,
  suit,
  rank,
  faceUp,
  x,
  y,
  rotation,
  zIndex,
  transitionDuration,
}: Props) {
  return (
    <motion.div
      layoutId={id}
      animate={{
        left: `${x}%`,
        top: `${y}%`,
        rotate: rotation,
        zIndex,
      }}
      transition={{ duration: transitionDuration / 1000, ease: 'easeInOut' }}
      style={{ position: 'absolute', zIndex }}
      className="w-12 h-[67px] sm:w-14 sm:h-[78px] rounded-md select-none"
    >
      {faceUp ? (
        <div
          className={`w-full h-full rounded-md border border-gray-300 bg-[#fdf6e3] flex flex-col justify-between p-1 shadow-md ${suitColor[suit]}`}
        >
          <span className="text-xs font-bold leading-none">{rank}</span>
          <span className="text-lg leading-none text-center">{suitSymbol[suit]}</span>
          <span className="text-xs font-bold leading-none self-end rotate-180">{rank}</span>
        </div>
      ) : (
        <div className="w-full h-full rounded-md border border-gray-700 card-back shadow-md" />
      )}
    </motion.div>
  );
}
