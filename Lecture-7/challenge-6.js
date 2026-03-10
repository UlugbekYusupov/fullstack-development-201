const inventory = [
	{ itemName: "Laptop", category: "Electronics", stock: 5 },
	{ itemName: "Phone", category: "Electronics", stock: 10 }
]

function totalStockByCategory(category) {
	return inventory
		.filter(item => item.category === category)
		.reduce((sum, item) => sum + item.stock, 0)
}

function lowStock(limit) {
	return inventory.filter(item => item.stock < limit)
}

console.log(totalStockByCategory("Electronics"))
console.log(lowStock(6))