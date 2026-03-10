const students = [
	{ name: "Alice", scores: [80, 90, 100] },
	{ name: "Bob", scores: [50, 60, 70] },
	{ name: "Charlie", scores: [30, 40, 20] }
]

let topStudent = null
let topAvg = 0

for (let s of students) {
	let sum = 0
	for (let x of s.scores) sum += x
	let avg = sum / s.scores.length
	s.average = avg
	s.passed = avg >= 50
	if (avg > topAvg) {
		topAvg = avg
		topStudent = s
	}
}

console.log(students)
console.log(topStudent)