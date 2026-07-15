const TEAMS = [
  { id: 'england', name: 'England', flagCode: 'gb-eng' },
  { id: 'usa', name: 'USA', flagCode: 'us' },
  { id: 'france', name: 'France', flagCode: 'fr' },
  { id: 'mexico', name: 'Mexico', flagCode: 'mx' },
  { id: 'japan', name: 'Japan', flagCode: 'jp' },
  { id: 'australia', name: 'Australia', flagCode: 'au' },
  { id: 'brazil', name: 'Brazil', flagCode: 'br' },
  { id: 'argentina', name: 'Argentina', flagCode: 'ar' },
];

const landing = document.getElementById('landing');
const teamSelect = document.getElementById('team-select');
const playBtn = document.getElementById('play-btn');
const backBtn = document.getElementById('back-btn');
const teamGrid = document.getElementById('team-grid');
const choice = document.getElementById('choice');

let selectedTeam = null;

function flagUrl(flagCode) {
  return `https://flagcdn.com/w160/${flagCode}.png`;
}

function showLanding() {
  landing.hidden = false;
  teamSelect.hidden = true;
  selectedTeam = null;
  choice.hidden = true;
  choice.textContent = '';
  teamGrid.querySelectorAll('.team-btn').forEach((btn) => {
    btn.classList.remove('team-btn--selected');
    btn.setAttribute('aria-pressed', 'false');
  });
}

function showTeamSelect() {
  landing.hidden = true;
  teamSelect.hidden = false;
}

function renderTeams() {
  teamGrid.innerHTML = TEAMS.map(
    (team) => `
      <li>
        <button type="button" class="team-btn" data-team-id="${team.id}" aria-pressed="false">
          <img
            class="team-btn__flag"
            src="${flagUrl(team.flagCode)}"
            alt=""
            width="80"
            height="53"
            loading="lazy"
          />
          <span class="team-btn__name">${team.name}</span>
        </button>
      </li>
    `
  ).join('');
}

teamGrid.addEventListener('click', (event) => {
  const button = event.target.closest('.team-btn');
  if (!button) return;

  const team = TEAMS.find((item) => item.id === button.dataset.teamId);
  if (!team) return;

  selectedTeam = team;
  teamGrid.querySelectorAll('.team-btn').forEach((btn) => {
    const isSelected = btn === button;
    btn.classList.toggle('team-btn--selected', isSelected);
    btn.setAttribute('aria-pressed', String(isSelected));
  });

  choice.hidden = false;
  choice.innerHTML = `You will play as <strong>${team.name}</strong>`;
});

playBtn.addEventListener('click', showTeamSelect);
backBtn.addEventListener('click', showLanding);

renderTeams();
