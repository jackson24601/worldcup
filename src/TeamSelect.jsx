import { TEAMS, flagUrl } from './teams';

export default function TeamSelect({ selectedTeam, onSelectTeam, onBack }) {
  return (
    <main className="team-select">
      <header className="team-select__header">
        <button type="button" className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <p className="team-select__brand">World Cup</p>
        <h1 className="team-select__title">Pick your team</h1>
        <p className="team-select__sub">
          Who will you represent on the road to the final?
        </p>
      </header>

      <ul className="team-grid" role="list">
        {TEAMS.map((team, index) => {
          const isSelected = selectedTeam?.id === team.id;
          return (
            <li key={team.id} style={{ '--i': index }}>
              <button
                type="button"
                className={`team-btn${isSelected ? ' team-btn--selected' : ''}`}
                onClick={() => onSelectTeam(team)}
                aria-pressed={isSelected}
              >
                <img
                  className="team-btn__flag"
                  src={flagUrl(team.flagCode)}
                  alt=""
                  width={80}
                  height={53}
                  loading="lazy"
                />
                <span className="team-btn__name">{team.name}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {selectedTeam && (
        <p className="team-select__choice" role="status">
          You will play as <strong>{selectedTeam.name}</strong>
        </p>
      )}
    </main>
  );
}
