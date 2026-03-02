

// challenge 4
function isPalindrome(n){
    nstr = String(n)
    
    const nreverse = nstr.split('').reverse().join('')
    if(nstr === nreverse){
        return true
    }
    return false
}


console.log(isPalindrome(122))


// challenge 5

function isArmstrong(n){
    const norg = n
    let sum = 0
    function cntDigit(a){
        const aS = String(a)
        return aS.length
    }
    const p = cntDigit(norg)
    while(n > 0){
        let lastD = n%10
        sum += lastD**p
        n = Math.floor(n/10)
    }
    if(sum === norg){
        return true
    }
    return false
}

console.log(isArmstrong(153))


//   challenge 6

function createCounter(initialVal){
    let a = initialVal;

    return {
        increment: function (){
            a += 1;
            return a
        },
        decrement: function(){
            a -= 1;
            return a;
        }, 
        setNull: function(){
            return a = 0;
        },
        getValue: function() {
            return a
        }
    }
}

const myNumber = createCounter(9)
myNumber.increment()

console.log(myNumber.getValue())