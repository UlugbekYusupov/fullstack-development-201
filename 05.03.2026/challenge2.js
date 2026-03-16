function isPrime(n){
     if(n == 1 || n == 2 || n == 3){
          return true
     }

     for(let d=2; d <= Math.sqrt(n); d++) {
          if (n % d == 0){
               return false;
          }
     }

     return true;
}

let x = isPrime(19)
console.log(x);
