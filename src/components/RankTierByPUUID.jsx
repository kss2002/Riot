import { useQuery } from '@tanstack/react-query';
import { fetchSummonerByRiotId, fetchLeagueInfoByPUUID } from '../api/riot';

export function RankTierByPUUID({ gameName, tagLine, mode }) {
  // Step 1: Riot ID → PUUID
  const {
    data: account,
    isLoading: loadingAccount,
    error: errorAccount,
  } = useQuery({
    queryKey: ['account', gameName, tagLine],
    queryFn: () => fetchSummonerByRiotId(gameName, tagLine),
    enabled: !!gameName && !!tagLine,
  });

  const puuid = account?.puuid;

  // Step 2: PUUID → 랭크/티어 정보
  const {
    data: leagueInfo,
    isLoading: loadingLeague,
    error: errorLeague,
  } = useQuery({
    queryKey: ['leagueByPUUID', puuid],
    queryFn: () => fetchLeagueInfoByPUUID(puuid),
    enabled: !!puuid,
  });

  if (loadingAccount || loadingLeague)
    return <p className={mode}>로딩 중...</p>;
  if (errorAccount)
    return <p className={mode}>❌ 소환사 정보 에러: {errorAccount.message}</p>;
  if (errorLeague)
    return <p className={mode}>❌ 랭크 정보 에러: {errorLeague.message}</p>;
  if (!leagueInfo) return null;

  // 솔로랭크 정보만 추출
  const soloRank = leagueInfo.find(
    (entry) => entry.queueType === 'RANKED_SOLO_5x5'
  );

  // 한국어로 변환
  const tierKor = {
    IRON: '아이언',
    BRONZE: '브론즈',
    SILVER: '실버',
    GOLD: '골드',
    PLATINUM: '플래티넘',
    EMERALD: '에메랄드',
    DIAMOND: '다이아몬드',
    MASTER: '마스터',
    GRANDMASTER: '그랜드마스터',
    CHALLENGER: '챌린저',
  };

  return (
    <div>
      <h3>PUUID 기반 랭크/티어 정보</h3>
      <p className={mode}>
        🏆 티어:{' '}
        {soloRank
          ? `${tierKor[soloRank.tier] || soloRank.tier} ${soloRank.rank} (${
              soloRank.leaguePoints
            }점)`
          : '배치 없음'}
      </p>
    </div>
  );
}
