let teams = [
    { name: "Team A", wins: 5, losses: 2, scored: 10, conceded: 3 },
    { name: "Team B", wins: 3, losses: 4, scored: 6, conceded: 8 },
    { name: "Team C", wins: 7, losses: 1, scored: 15, conceded: 2 }
];

function calculatePoints(team) {
    return team.wins * 3;
}

function goalDiff(team) {
    return team.scored - team.conceded;
}

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
        <td>${calculatePoints(team)}</td>
        <td>${goalDiff(team)}</td>
      </tr>
    `;
        tbody.innerHTML += row;
    });
}

function addTeam() {
    const name = document.getElementById("name").value;
    const wins = +document.getElementById("wins").value;
    const losses = +document.getElementById("losses").value;
    const scored = +document.getElementById("scored").value;
    const conceded = +document.getElementById("conceded").value;

    if (!name) return alert("Enter team name!");

    teams.push({ name, wins, losses, scored, conceded });
    renderTable();
}

function sortTeams() {
    teams.sort((a, b) => {
        return calculatePoints(b) - calculatePoints(a) ||
            goalDiff(b) - goalDiff(a);
    });
    renderTable();
}

function highlightBest() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => row.classList.remove("highlight"));

    if (rows.length > 0) {
        rows[0].classList.add("highlight");
    }
}

renderTable();