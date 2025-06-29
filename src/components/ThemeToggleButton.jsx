import useThemeStore from '../storeTheme';
import './ThemeToggleButton.css';

export default function ThemeToggleButton() {
  const { mode, toggleMode } = useThemeStore();

  return (
    <button
      className={`theme-toggle-btn ${mode}`}
      onClick={toggleMode}
      aria-label="Toggle dark/light mode"
    >
      <span className="icon-wrapper">
        {mode === 'light' ? (
          <span className="sun">☀️</span>
        ) : (
          <span className="moon">🌙</span>
        )}
      </span>
    </button>
  );
}
