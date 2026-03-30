const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

const gosignup = document.getElementById("gosignup");
const gologin = document.getElementById("gologin");


// login ga otish

gologin.addEventListener("click", function(){
    signupForm.classList.add("hidden")
    loginForm.classList.remove("hidden")
})

// sign up ga otish 

gosignup.addEventListener("click" , function(){ 
    loginForm.classList.add("hidden")
    signupForm.classList.remove("hidden")
})

