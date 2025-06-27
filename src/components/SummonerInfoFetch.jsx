import { useEffect, useState } from 'react';
import { fetchSummonerByRiotId } from '../api/riot';

export function SummonerInfoFetch({ gameName, tagLine, mode }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!gameName || !tagLine) return;

    setLoading(true);
    setError('');
    setData(null);

    fetchSummonerByRiotId(gameName, tagLine)
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [gameName, tagLine]);

  if (loading) return <p className={mode}>로딩 중...</p>;
  if (error) return <p className={mode}>❌ 에러: {error}</p>;
  if (!data) return null;

  // PUUID 콘솔에 출력
  console.log(`PUUID (${gameName}#${tagLine}):`, data.puuid);

  return (
    <div>
      <h3>소환사 정보 (fetch방식)</h3>
      <p className={mode}>이름: {data.gameName}</p>
      <p className={mode}>태그라인: {data.tagLine}</p>
    </div>
  );
}
