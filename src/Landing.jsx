export default function Landing({ onPlay }) {
  return (
    <main className="landing">
      <div className="landing__content">
        <p className="landing__brand">World Cup</p>
        <h1 className="landing__headline">Take the pitch. Claim the trophy.</h1>
        <p className="landing__sub">
          Choose your nation and chase glory on the world stage.
        </p>
        <button type="button" className="play-btn" onClick={onPlay}>
          Play!
        </button>
      </div>
    </main>
  );
}
