const cart = [
	{ id: 1, name: "Laptop", price: 900, quantity: 1 },
	{ id: 2, name: "Mouse", price: 50, quantity: 2 },
	{ id: 3, name: "Keyboard", price: 100, quantity: 1 }
]

let total = 0
let mostExpensive = cart[0]

for (let item of cart) {
	total += item.price * item.quantity
	if (item.price > mostExpensive.price) {
		mostExpensive = item
	}
}

if (total > 100) total = total * 0.9

console.log(total)
console.log(mostExpensive)