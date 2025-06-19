import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SummonerInfoFetch } from './components/SummonerInfoFetch';
import { SummonerInfoSWR } from './components/SummonerInfoSWR';
import { SummonerInfoQuery } from './components/SummonerInfoQuery';
import { RankTierByPUUID } from './components/RankTierByPUUID';
import './App.css';

const queryClient = new QueryClient();

// QueryClientProvider는 애플리케이션의 최상위 컴포넌트에 위치해야 합니다.
// 소환사 정보를 게임 이름과 태그라인으로 조회하는 컴포넌트

export default function App() {
  const [gameName, setGameName] = useState('');
  const [tagLine, setTagLine] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-6 max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">🔍 소환사 정보 조회 비교</h1>

        <input
          type="text"
          placeholder="게임 이름 (예: Hide on bush)"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="태그라인 (예: KR1)"
          value={tagLine}
          onChange={(e) => setTagLine(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <div className="p-4 border rounded shadow">
          <RankTierByPUUID gameName={gameName} tagLine={tagLine} />
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="p-4 border rounded shadow">
            <SummonerInfoFetch gameName={gameName} tagLine={tagLine} />
          </div>

          <div className="p-4 border rounded shadow">
            <SummonerInfoSWR gameName={gameName} tagLine={tagLine} />
          </div>

          <div className="p-4 border rounded shadow">
            <SummonerInfoQuery gameName={gameName} tagLine={tagLine} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
