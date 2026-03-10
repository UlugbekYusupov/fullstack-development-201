const products = [
	{ id: 1, name: "Laptop", price: 1200, stock: 10 },
	{ id: 2, name: "Phone", price: 700, stock: 15 }
]

function addProduct(product) {
	products.push(product)
}

function updateStock(id, newStock) {
	products.map(p => {
		if (p.id === id) p.stock = newStock
	})
}

function deleteProduct(id) {
	const index = products.findIndex(p => p.id === id)
	if (index !== -1) products.splice(index, 1)
}

function findProduct(name) {
	return products.find(p => p.name === name)
}

addProduct({ id: 3, name: "Keyboard", price: 100, stock: 20 })
updateStock(1, 5)
deleteProduct(2)

console.log(findProduct("Laptop"))
console.log(products)