import Counter from '../src/page/Counter.jsx';
import ProfileCard from '../src/page/ProfileCard.jsx';

export default function App() {
  return (
    <>
      <div>
        <h1>Props vs State 예제</h1>
        <Counter title="클릭 카운터" />
      </div>
      <div>
        <h1>프로필 카드 예제</h1>
        <ProfileCard />
      </div>
    </>
  );
}
