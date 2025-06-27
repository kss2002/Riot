import useSWR from 'swr';
import { fetchSummonerByRiotId } from '../api/riot';

export function SummonerInfoSWR({ gameName, tagLine, mode }) {
  if (!gameName || !tagLine) return null;

  const key = ['summonerByRiotId', gameName, tagLine];

  const fetcher = () => fetchSummonerByRiotId(gameName, tagLine);

  const { data, error, isLoading } = useSWR(key, fetcher);

  if (isLoading) return <p className={mode}>로딩 중...</p>;
  if (error) return <p className={mode}>❌ 에러: {error.message}</p>;
  if (!data) return null;

  // PUUID 콘솔에 출력
  console.log(`PUUID (${gameName}#${tagLine}):`, data.puuid);

  return (
    <div>
      <h3>소환사 정보 (SWR방식)</h3>
      <p className={mode}>이름: {data.gameName}</p>
      <p className={mode}>태그라인: {data.tagLine}</p>
    </div>
  );
}
