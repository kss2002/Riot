import '../styles/ProfileCard.css';

const ProfileCard__item = {
  name: '김성수',
  bio: '안녕하세요! 저는 웹 개발자입니다. React와 Node.js를 사용하여 웹 애플리케이션을 개발하고 있습니다.',
  image: './winter.jpg',
};

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src={ProfileCard__item.image}
        alt={`${ProfileCard__item.name} 사진`}
        className="profile-image"
      />
      <h2 className="profile-name">{ProfileCard__item.name}</h2>
      <p className="profile-bio">{ProfileCard__item.bio}</p>
    </div>
  );
}
