const teamNameInput = document.getElementById("teamName");
const winsInput = document.getElementById("wins");
const lossesInput = document.getElementById("losses");
const goalsScoredInput = document.getElementById("goalsScored");
const goalsConcededInput = document.getElementById("goalsConceded");
const addTeamBtn = document.getElementById("addTeamBtn");
const sortBtn = document.getElementById("sortBtn");
const highlightBtn = document.getElementById("highlightBtn");
const leaderboardBody = document.getElementById("leaderboardBody");

let teams = [
  {
    team: "Team A",
    wins: 5,
    losses: 2,
    goalsScored: 10,
    goalsConceded: 3,
  },
  {
    team: "Team B",
    wins: 3,
    losses: 4,
    goalsScored: 6,
    goalsConceded: 8,
  }
];

function calculatePoints(wins) {
  return wins * 3;
}

function calculateGoalDiff(goalsScored, goalsConceded) {
  return goalsScored - goalsConceded;
}

function renderTable() {
  leaderboardBody.innerHTML = "";

  teams.forEach((team, index) => {
    const points = calculatePoints(team.wins);
    const goalDiff = calculateGoalDiff(team.goalsScored, team.goalsConceded);

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${team.team}</td>
      <td>${team.wins}</td>
      <td>${team.losses}</td>
      <td>${points}</td>
      <td>${goalDiff}</td>
    `;

    leaderboardBody.appendChild(tr);
  });
}

function clearInputs() {
  teamNameInput.value = "";
  winsInput.value = "";
  lossesInput.value = "";
  goalsScoredInput.value = "";
  goalsConcededInput.value = "";
}

function addTeam() {
  const team = teamNameInput.value.trim();
  const wins = Number(winsInput.value);
  const losses = Number(lossesInput.value);
  const goalsScored = Number(goalsScoredInput.value);
  const goalsConceded = Number(goalsConcededInput.value);

  if (
    !team ||
    winsInput.value === "" ||
    lossesInput.value === "" ||
    goalsScoredInput.value === "" ||
    goalsConcededInput.value === ""
  ) {
    alert("Barcha maydonlarni to'ldiring");
    return;
  }

  const newTeam = {
    team,
    wins,
    losses,
    goalsScored,
    goalsConceded,
  };

  teams.push(newTeam);
  renderTable();
  clearInputs();

  console.log(teams);
}

function sortByRanking() {
  teams.sort((a, b) => {
    const pointsA = calculatePoints(a.wins);
    const pointsB = calculatePoints(b.wins);

    if (pointsB !== pointsA) {
      return pointsB - pointsA;
    }

    const goalDiffA = calculateGoalDiff(a.goalsScored, a.goalsConceded);
    const goalDiffB = calculateGoalDiff(b.goalsScored, b.goalsConceded);

    return goalDiffB - goalDiffA;
  });

  renderTable();
}

function highlightBestTeam() {
  sortByRanking();

  const rows = document.querySelectorAll("#leaderboardBody tr");
  rows.forEach((row) => row.classList.remove("highlight"));

  if (rows.length > 0) {
    rows[0].classList.add("highlight");
  }
}

addTeamBtn.addEventListener("click", addTeam);
sortBtn.addEventListener("click", sortByRanking);
highlightBtn.addEventListener("click", highlightBestTeam);

renderTable();