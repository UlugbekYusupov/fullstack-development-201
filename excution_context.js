//Challenge 1
console.log("5" + 5)
console.log("5" - 5)
console.log("5" * "2")
console.log("10" / 2)
console.log(5 + true)
console.log("10" - true)
console.log("5" + true)
console.log(5 + null)
console.log(5 + undefined)
console.log("------------------------------");

//Challenge 2
const bar = function () {
  console.log('bar');
};

const baz = function () {
  console.log('baz');
};

const foo = function () {
  console.log("fo0");
  bar()
  console.log('bazz');
  let a = 5
};

foo()