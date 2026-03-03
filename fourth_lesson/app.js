// 1 - masala

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");
greet("Bob");
greet("Charlie");
greet("Diana");
greet("Eve");

// Assignment 1 - masala

function CalculatePrice(price, quantity) {
    if (quantity > 5){
        return price * quantity * 0.8; 
    }else if (quantity > 3){
        return price * quantity * 0.9;
    }
    return price * quantity;
}

console.log(CalculatePrice(100, 2));
console.log(CalculatePrice(100, 4));
console.log(CalculatePrice(100, 6));

// Assignment 2 - masala

function CheckPassword(password) {
    isEnoughLength = password.length >= 8;
    hasUpperCase = /[A-Z]/.test(password);
    hasLowerCase = /[a-z]/.test(password);
    hasDigit = /\d/.test(password);
    hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (isEnoughLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
        console.log("Password is strong");
    }else if(isEnoughLength && hasUpperCase && hasLowerCase && hasDigit) {
        console.log("Password is medium");
    } else {
        console.log("Password is weak");
    }
}

CheckPassword("Abc123!@#");
CheckPassword("password");
CheckPassword("PASSWORD123");
CheckPassword("Passw0rd");
CheckPassword("P@ssw0rd");

// Assignment 3 - masala

function ATMCashWithdrawal(amount) {
    if (amount % 10 !== 0) {
        console.log("Error: Amount must be in multiples of 10");
        return;
    }
    
    const denominations = [100, 50, 20, 10];
    const bills = {};
    
    for (const denomination of denominations) {
        bills[denomination] = Math.floor(amount / denomination);
        amount -= bills[denomination] * denomination;
    }
    
    console.log("Dispensed bills:");
    for (const denomination of denominations) {
        if (bills[denomination] > 0) {
            console.log(`${bills[denomination]} x $${denomination}`);
        }
    }
}

ATMCashWithdrawal(370);
ATMCashWithdrawal(85);
ATMCashWithdrawal(45);
ATMCashWithdrawal(30);
ATMCashWithdrawal(15);

// Assignment 4 - masala

function TrafficLightSimulation(){
    const colors = ["Red", "Yellow", "Green"];
    const seconds = [5, 3, 2]
    setTimeout(() => {
        console.log(colors[0]);
        setTimeout(() => {
            console.log(colors[1]);
            setTimeout(() => {
                console.log(colors[2]);
            }, seconds[2] * 1000);
        }, seconds[1] * 1000);
    }, seconds[0] * 1000);
}

TrafficLightSimulation();

// Assignment 5 - masala
