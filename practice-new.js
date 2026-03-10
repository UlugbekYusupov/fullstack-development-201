// Practice 1

function studentGradeManagement(students) {
    let topStudent = null;
    let topAverage = -1;

    students.forEach(student => {
        const scores = student.scores;
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        const passed = average >= 50;

        console.log(`${student.name}: Average = ${average.toFixed(2)}, Passed = ${passed}`);

        if (average > topAverage) {
            topAverage = average;
            topStudent = student.name;
        }
    });

    console.log(`Top-performing student: ${topStudent} with average ${topAverage.toFixed(2)}`);
}

const students = [
    { name: "Alice", scores: [80, 90, 100] },
    { name: "Bob", scores: [50, 60, 70] },
    { name: "Charlie", scores: [30, 40, 20] }
];

studentGradeManagement(students);




// Practice 2

function eCommerceCart(cartItems) {
    let totalPrice = 0;
    let mostExpensiveItem = null;
    let maxPrice = -1;

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        if (item.price > maxPrice) {
            maxPrice = item.price;
            mostExpensiveItem = item.name;
        }
    });

    if (totalPrice > 100) {
        totalPrice *= 0.9; 
    }

    console.log(`Total price after discount: $${totalPrice.toFixed(2)}`);
    console.log(`Most expensive item: ${mostExpensiveItem} at $${maxPrice}`);
}

const cart = [
    { id: 1, name: "Laptop", price: 900, quantity: 1 },
    { id: 2, name: "Mouse", price: 50, quantity: 2 },
    { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

eCommerceCart(cart);

// Practice 3


let products = [
    { id: 1, name: "Laptop", price: 1200, stock: 10 },
    { id: 2, name: "Phone", price: 700, stock: 15 }
];

function addProduct(id, name, price, stock) {
    products.push({ id, name, price, stock });
    console.log(`Added product: ${name}`);
}

function updateStock(id, newStock) {
    products = products.map(product => 
        product.id === id ? { ...product, stock: newStock } : product
    );
    console.log(`Updated stock for product ID ${id} to ${newStock}`);
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    console.log(`Deleted product with ID ${id}`);
}

function findProduct(name) {
    const found = products.filter(product => product.name.toLowerCase() === name.toLowerCase());
    if (found.length > 0) {
        console.log("Found product:", found[0]);
    } else {
        console.log("Product not found");
    }
    return found;
}

function getTotalInventoryValue() {
    const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
    console.log(`Total inventory value: $${totalValue}`);
    return totalValue;
}

addProduct(4, "Monitor", 200, 15);
updateStock(2, 60);
deleteProduct(3);
findProduct("Laptop");
getTotalInventoryValue();


// Practice 4

const posts = [

    { author: "Alice", likes: 150, comments: 20, shares: 5 },
    { author: "Bob", likes: 200, comments: 50, shares: 10 }
    
];

function findMostLikedPost(posts) {
    let mostLiked = posts[0];
    posts.forEach(post => {
        if (post.likes > mostLiked.likes) {
            mostLiked = post;
        }
    });
    console.log(`Most liked post by ${mostLiked.author} with ${mostLiked.likes} likes`);
    return mostLiked;
}

findMostLikedPost(posts);


// Practice 5


const teams = [
    { name: "Team A", wins: 5, losses: 2, points: 15},
    { name: "Team B", wins: 6, losses: 1, points: 18}
];

function sortTeamsByRanking(teams) {
    return teams.sort((a, b) => {
        if (b.points !== a.points) {
            return b.points - a.points; 
        }
        return b.wins - a.wins;
    });
}

function findBestPerformingTeam(teams) {
    const bestTeam = teams.reduce((best, current) => 
        current.points > best.points ? current : best
    );
    console.log(`Best performing team: ${bestTeam.name} with ${bestTeam.points} points`);
    return bestTeam;
}

const sortedTeams = sortTeamsByRanking([...teams]);
console.log("Teams sorted by ranking:");
sortedTeams.forEach(team => {
    console.log(`${team.name}: ${team.points} points, ${team.wins} wins`);
});

findBestPerformingTeam(teams);


// Practice 6


const inventory = [
    { itemName: "Laptop", category: "Electronics", stock: 5 },
    { itemName: "Phone", category: "Electronics", stock: 10 }
];

function totalStockByCategory(category) {
    return inventory
        .filter((item) => item.category === category)
        .reduce((sum, item) => sum + item.stock, 0);
}

function lowStockAlert(threshold = 5) {
    const lowStockItems = inventory.filter(item => item.stock < threshold);
    console.log(`Items with stock below ${threshold}:`);
    lowStockItems.forEach(item => {
        console.log(`⚠️ ${item.itemName} (${item.category}): ${item.stock} units`);
    });
    return lowStockItems;
}

function getAllCategoriesStock() {
    const categories = [...new Set(inventory.map(item => item.category))];
    console.log("Stock by category:");
    categories.forEach(category => {
        const total = totalStockByCategory(category);
        console.log(`${category}: ${total} units`);
    });
}

console.log(`Total Electronics stock: ${totalStockByCategory("Electronics")}`);
console.log(`Total Furniture stock: ${totalStockByCategory("Furniture")}`);
getAllCategoriesStock();
lowStockAlert(5);