import { useQuery } from '@tanstack/react-query';
import { fetchSummonerByRiotId } from '../api/riot';

export function SummonerInfoQuery({ gameName, tagLine, mode }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['summonerByRiotId', gameName, tagLine],
    queryFn: () => fetchSummonerByRiotId(gameName, tagLine),
    enabled: !!gameName && !!tagLine,
  });

  if (isLoading) return <p className={mode}>로딩 중...</p>;
  if (error) return <p className={mode}>❌ 에러: {error.message}</p>;
  if (!data) return null;

  // PUUID 콘솔에 출력
  console.log(`PUUID (${gameName}#${tagLine}):`, data.puuid);

  return (
    <div>
      <h3>소환사 정보 (TanStack Query방식)</h3>
      <p className={mode}>이름: {data.gameName}</p>
      <p className={mode}>태그라인: {data.tagLine}</p>
    </div>
  );
}
