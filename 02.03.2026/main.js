// function parent() {                  
//     let parentVar = "I am parent";   

//     function child() {               
//         let childVar = "I am child"; 

//         console.log(parentVar);       
//     }

//     child();                         

//     console.log(childVar);           
// }

// parent();

function a() {
    let x = 1;
    function b() {
        function c() {
            console.log(x);
        }
        c();
    }
    b();
}

a()

if (true) {
    let blockVar = 42;
}

console.log(blockVar); // ❌ не видно