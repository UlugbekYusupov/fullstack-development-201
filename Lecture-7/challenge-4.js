const posts = [
	{ author: "Alice", likes: 100, comments: 20, shares: 5 },
	{ author: "Bob", likes: 200, comments: 50, shares: 10 }
]

function mostLiked(posts) {
	let best = posts[0]
	for (let p of posts) {
		if (p.likes > best.likes) best = p
	}
	return best
}

function totalEngagement(posts) {
	let total = 0
	for (let p of posts) {
		total += p.likes + p.comments + p.shares
	}
	return total
}

console.log(mostLiked(posts))
console.log(totalEngagement(posts))