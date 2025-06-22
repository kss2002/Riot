const BASE_URL = 'https://asia.api.riotgames.com';

// API 키가 필요합니다.
const getHeaders = () => ({
  'X-Riot-Token': import.meta.env.VITE_RIOT_API_KEY,
});

// gameName + tagLine으로 소환사 정보 조회
export async function fetchSummonerByRiotId(gameName, tagLine) {
  if (!gameName || !tagLine)
    throw new Error('gameName과 tagLine이 필요합니다.');

  const encodedGameName = encodeURIComponent(gameName);
  const encodedTagLine = encodeURIComponent(tagLine);

  const url = `${BASE_URL}/riot/account/v1/accounts/by-riot-id/${encodedGameName}/${encodedTagLine}`;

  const res = await fetch(url, {
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error(`API 요청 실패: 상태 코드 ${res.status}`);
  }

  return res.json();
}

// PUUID로 리그/티어 정보 조회 (KR shard)
export async function fetchLeagueInfoByPUUID(puuid) {
  if (!puuid) throw new Error('puuid가 필요합니다.');
  const url = `https://kr.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`;
  const res = await fetch(url, { headers: getHeaders() });
  if (!res.ok) throw new Error(`PUUID로 리그 정보 요청 실패 (${res.status})`);
  return res.json(); // 티어 정보 배열
}
