import { useState } from 'react';
import Landing from './Landing';
import TeamSelect from './TeamSelect';
import './App.css';

function App() {
  const [screen, setScreen] = useState('landing');
  const [selectedTeam, setSelectedTeam] = useState(null);

  function handlePlay() {
    setScreen('team-select');
  }

  function handleSelectTeam(team) {
    setSelectedTeam(team);
  }

  function handleBack() {
    setScreen('landing');
    setSelectedTeam(null);
  }

  return (
    <div className="app-shell">
      <div className="pitch-backdrop" aria-hidden="true" />
      {screen === 'landing' && <Landing onPlay={handlePlay} />}
      {screen === 'team-select' && (
        <TeamSelect
          selectedTeam={selectedTeam}
          onSelectTeam={handleSelectTeam}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
