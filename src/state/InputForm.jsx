// InputForm.jsx
import { useState } from 'react';
// 이 컴포넌트는 사용자가 입력한 값을 실시간으로 상태로 관리하는 예제입니다.
export default function InputForm() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>입력한 값: {text}</h2>
      <input
        type="text"
        placeholder="여기에 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <hr />
    </div>
  );
}
