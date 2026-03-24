// // console.log("hello");
// let ism = "Boborahim"
// console.log(ism);

// let familiya = "Rustamqulov"
// console.log(familiya);

// let yosh = 18
// console.log(yosh);

// let id = Symbol("id");
// console.log(id);

// const alsoHuge= BigInt("1234567890123456789012345678901234567890");
// console.log(alsoHuge);



//O'zgaruvchilar turlari data types
// let age  = 18
// let firstname = "Boborahim"
// console.log(typeof firstname);

// var a = 10;
// var a = 20;
// console.log(a);
// alert("Bu alert");


//  DOM Manipulation 
let title = document.querySelector("h1");
let button = document.querySelector("#toggle-color");

let isGreen = true;
if (title) {
	title.style.color = "green";
}

if (button) {
	button.addEventListener("click", function () {
		if (!title) {
			return;
		}

		if (isGreen) {
			title.style.color = "red";
		} else {
			title.style.color = "green";
		}

		isGreen = !isGreen;
	});
}