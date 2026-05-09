import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Decorative suit symbols */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <span className="absolute text-8xl text-gold/5 top-8 left-8 rotate-[-15deg]">♠</span>
        <span className="absolute text-7xl text-gold/5 top-16 right-12 rotate-10">♥</span>
        <span className="absolute text-9xl text-gold/4 bottom-12 left-16 rotate-20">♦</span>
        <span className="absolute text-8xl text-gold/5 bottom-8 right-8 rotate-[-8deg]">♣</span>
        <span className="absolute text-6xl text-gold/3 top-1/2 left-4 rotate-[30deg]">♠</span>
        <span className="absolute text-6xl text-gold/3 top-1/3 right-4 rotate-[-25deg]">♣</span>
      </div>

      <div className="relative z-10 max-w-xl">
        <h1 className="text-6xl font-bold text-gold mb-3 tracking-tight">Sappie</h1>
        <p className="text-xl text-card-text/70 mb-2">Learn card games. Master the shuffle.</p>
        <p className="text-card-text/40 text-sm mb-10">
          Browse 15 card games or watch animated step-by-step shuffle &amp; deal techniques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/games"
            className="px-8 py-3 bg-gold text-felt-dark font-semibold rounded-xl hover:bg-gold/90 transition-colors text-sm"
          >
            ♠ Browse Games
          </Link>
          <Link
            href="/shuffle"
            className="px-8 py-3 border border-gold/40 text-gold rounded-xl hover:bg-gold/10 transition-colors text-sm"
          >
            ♦ Watch Techniques
          </Link>
        </div>
      </div>
    </main>
  );
}
