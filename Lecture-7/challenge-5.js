const teams = [
	{ name: "Team A", wins: 5, losses: 2, points: 15 },
	{ name: "Team B", wins: 6, losses: 1, points: 18 }
]

function sortTeams(arr) {
	return arr.sort((a, b) => b.points - a.points)
}

function bestTeam(arr) {
	let best = arr[0]
	for (let t of arr) {
		if (t.points > best.points) best = t
	}
	return best
}

console.log(sortTeams(teams))
console.log(bestTeam(teams))