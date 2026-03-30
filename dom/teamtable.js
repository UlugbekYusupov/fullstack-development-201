const teams = [
  {
    name: "Team Alpha",
    wins: 6,
    losses: 2,
    points: 18,
    diff: 10
  },
  {
    name: "Team Bravo",
    wins: 4,
    losses: 3,
    points: 12,
    diff: 3
  },
  {
    name: "Team Cobra",
    wins: 7,
    losses: 1,
    points: 21,
    diff: 15
  },
  {
    name: "Team Delta",
    wins: 3,
    losses: 5,
    points: 9,
    diff: -4
  },
  {
    name: "Team Eagle",
    wins: 5,
    losses: 2,
    points: 15,
    diff: 6
  }
];
document.getElementById("addBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const wins = +document.getElementById("wins").value;
  const losses = +document.getElementById("losses").value;
  const scored = +document.getElementById("scored").value;
  const conceded = +document.getElementById("conceded").value;

  const points = wins * 3;
  const diff = scored - conceded;

  const team = { name, wins, losses, points, diff };

  teams.push(team);

  renderTable();
});

function renderTable() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  teams.forEach((team, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>${team.wins}</td>
        <td>${team.losses}</td>
        <td>${team.points}</td>
        <td>${team.diff}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

document.getElementById("sortBtn").addEventListener("click", () => {
  teams.sort((a, b) => b.points - a.points);
  renderTable();
});


document.getElementById("bestBtn").addEventListener("click", () => {
  const rows = document.querySelectorAll("#tableBody tr");

  rows.forEach(row => row.style.background = "");

  if (rows.length > 0) {
    rows[0].style.background = "lightgreen";
  }
});