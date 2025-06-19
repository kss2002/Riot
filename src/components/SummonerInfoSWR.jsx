import useSWR from 'swr';
import { fetchSummonerByRiotId } from '../api/riot';

export function SummonerInfoSWR({ gameName, tagLine }) {
  if (!gameName || !tagLine) return null;

  const key = ['summonerByRiotId', gameName, tagLine];

  const fetcher = () => fetchSummonerByRiotId(gameName, tagLine);

  const { data, error, isLoading } = useSWR(key, fetcher);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>❌ 에러: {error.message}</p>;
  if (!data) return null;

  // PUUID 콘솔에 출력
  console.log(`PUUID (${gameName}#${tagLine}):`, data.puuid);

  return (
    <div>
      <h3>소환사 정보 (SWR방식)</h3>
      <p>이름: {data.gameName}</p>
      <p>태그라인: {data.tagLine}</p>
    </div>
  );
}
