// Assignment



// Assignment 1 

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

// Assignment 2 

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

// Assignment 3 

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


//Assignment 4 

function trafficLight() {
    console.log("Red");
    
    setTimeout(() => {
        console.log("Green");
        
        setTimeout(() => {
            console.log("Yellow");
            
            setTimeout(() => {
                trafficLight(); 
            }, 2000); 
            
        }, 3000); 
        
    }, 5000);
}

trafficLight();


//Assignment 5

function checkPasswordStrength(password) {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const passedConditions = [
        hasMinLength,
        hasUpperCase,
        hasNumber,
        hasSpecialChar
    ].filter(Boolean).length;

    if (passedConditions === 4) {
        return "Strong";
    } else if (passedConditions >= 2) {
        return "Medium";
    } else {
        return "Weak";
    }
}


console.log(checkPasswordStrength("Password1!")); 
console.log(checkPasswordStrength("Password1"));
console.log(checkPasswordStrength("pass"));    


// Assignment 6

function bankAccount(initialBalance = 0) {
    let balance = initialBalance; 

    return {
        deposit(amount) {
            if (amount <= 0) {
                return "Deposit amount must be positive";
            }
            balance += amount;
            return `Deposited: $${amount}`;
        },

        withdraw(amount) {
            if (amount <= 0) {
                return "Withdrawal amount must be positive";
            }
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return `Withdrawn: $${amount}`;
        },

        viewBalance() {
            return `Current balance: $${balance}`;
        }
    };
}

const account = bankAccount(100);

console.log(account.viewBalance()); 
console.log(account.deposit(50));    
console.log(account.withdraw(30));   
console.log(account.viewBalance());  



// Assignment 7

function createUser(role) {
    const permissions = {
        admin: ["add", "edit", "delete", "view"],
        editor: ["edit", "view"],
        viewer: ["view"]
    };

    return {
        role,
        can(action) {
            return permissions[role]?.includes(action) || false;
        },
        perform(action) {
            if (this.can(action)) {
                return `${role} performed ${action}`;
            }
            return `Access denied for ${role}`;
        }
    };
}

const admin = createUser("admin");
const editor = createUser("editor");
const viewer = createUser("viewer");

console.log(admin.perform("delete"));  
console.log(editor.perform("delete")); 
console.log(viewer.perform("view"));   


// Assignment 8

function calculateTax(salary) {
    if (salary < 0) {
        return "Invalid salary";
    }

    let taxRate;

    if (salary < 10000) {
        taxRate = 0;
    } else if (salary <= 50000) {
        taxRate = 0.10;
    } else {
        taxRate = 0.20;
    }

    const taxAmount = salary * taxRate;
    const netIncome = salary - taxAmount;

    return {
        salary,
        taxRate: taxRate * 100 + "%",
        taxAmount,
        netIncome
    };
}

console.log(calculateTax(8000));
console.log(calculateTax(30000));
console.log(calculateTax(70000));