import { notFound } from 'next/navigation';
import { allGames, getGameBySlug } from '@/data/games';
import GameDetail from '@/components/games/GameDetail';

export function generateStaticParams() {
  return allGames.map((g) => ({ slug: g.slug }));
}

export default async function GameSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();
  return <GameDetail game={game} />;
}
