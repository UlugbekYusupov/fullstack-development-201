const teamName = document.getElementById("teamName");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const goalsScored = document.getElementById("goalsScored");
const goalsConceded = document.getElementById("goalsConceded");

const addBtn = document.getElementById("addTeam");
const sortBtn = document.getElementById("sortBtn");
const bestBtn = document.getElementById("bestBtn");

const tableBody = document.getElementById("tableBody");

let teams = [];

function renderTable() {
  tableBody.innerHTML = "";

  teams.forEach((team, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
<td>${index + 1}</td>
<td>${team.name}</td>
<td>${team.wins}</td>
<td>${team.losses}</td>
<td>${team.points}</td>
<td>${team.goalDiff}</td>
`;

    tableBody.appendChild(row);
  });
}

addBtn.addEventListener("click", function () {
  let team = {
    name: teamName.value,
    wins: Number(wins.value),
    losses: Number(losses.value),
    goalsScored: Number(goalsScored.value),
    goalsConceded: Number(goalsConceded.value),
  };

  team.points = team.wins * 3;
  team.goalDiff = team.goalsScored - team.goalsConceded;

  teams.push(team);

  renderTable();
});

sortBtn.addEventListener("click", function () {
  teams.sort((a, b) => b.points - a.points);

  renderTable();
});

bestBtn.addEventListener("click", function () {
  let rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => row.classList.remove("best"));

  if (rows.length > 0) {
    rows[0].classList.add("best");
  }
});
