console.log(username);
var username = "Ulugbek";

// console.log(age);
// let age = 20;

function greet(sayHello) {
  sayHello();
}

greet(function () {
  console.log("Bu callback");
});

Array.prototype.getValues = function () {
  console.log("Bu Array prototypedan kelyapdi");
};

Array().getValues();
