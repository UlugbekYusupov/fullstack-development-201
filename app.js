// challenge 2

function isPrime(n){
    let i=1
    let cnt = 0;
    while(i <= n){
        if(n%i==0){
            cnt++;
        }
        i++;
    }

    if(cnt==2){
        return true
    } 
    return false
}

console.log(isPrime(4))