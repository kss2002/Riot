// DarkModeToggle.jsx
import { useState } from 'react';
import '../styles/DarkModeToggle.css';
// 이 컴포넌트는 다크 모드와 라이트 모드를 토글하는 예제입니다.

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <h2>{isDark ? '🌙 다크모드' : '☀️ 라이트모드'}</h2>
      <button onClick={() => setIsDark(!isDark)}>모드 토글</button>
    </div>
  );
}
