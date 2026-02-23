let n = +prompt()
console.log(
  n % 2 == 0 
    ? parseInt(n / 2) + " " + parseInt(n / 2)
    : parseInt(n / 2) + " " + (parseInt(n / 2) + 1)
)