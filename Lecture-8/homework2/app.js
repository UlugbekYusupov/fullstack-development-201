const form = document.getElementById('teamForm');
const sortBtn = document.getElementById('sortBtn');
const highlightBtn = document.getElementById('highlightBtn');
const tbody = document.getElementById('leaderboardBody');

const teams = [
    { team: 'Team A', wins: 5, losses: 2, scored: 15, conceded: 8 },
    { team: 'Team B', wins: 3, losses: 4, scored: 9, conceded: 11 },
    { team: 'Team C', wins: 7, losses: 1, scored: 21, conceded: 8 }
];

function calcPoints(team) {
    return team.wins * 3;
}

function calcDiff(team) {
    return team.scored - team.conceded;
}

function renderTable() {
    tbody.innerHTML = '';

    teams.forEach((team, i) => {
        const tr = document.createElement('tr');

        const cells = [
            i + 1,
            team.team,
            team.wins,
            team.losses,
            calcPoints(team),
            calcDiff(team)
        ];

        cells.forEach((value) => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

function sortTeams() {
    teams.sort((a, b) => {
        const pointsDiff = calcPoints(b) - calcPoints(a);
        if (pointsDiff !== 0) return pointsDiff;
        return calcDiff(b) - calcDiff(a);
    });
    renderTable();
}

function highlightBest() {
    const rows = tbody.querySelectorAll('tr');
    rows.forEach((row) => row.classList.remove('highlight'));

    if (rows.length > 0) {
        rows[0].classList.add('highlight');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const newTeam = {
        team: String(data.get('team')).trim(),
        wins: Number(data.get('wins')),
        losses: Number(data.get('losses')),
        scored: Number(data.get('scored')),
        conceded: Number(data.get('conceded'))
    };

    if (!newTeam.team) return;

    teams.push(newTeam);
    sortTeams();
    highlightBest();
    form.reset();
});

sortBtn.addEventListener('click', () => {
    sortTeams();
    highlightBest();
});

highlightBtn.addEventListener('click', () => {
    highlightBest();
});

sortTeams();
