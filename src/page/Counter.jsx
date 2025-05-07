import { useState } from 'react';

export default function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{title}</h2> {/* ✅ props */}
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
