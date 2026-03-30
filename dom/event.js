// // elementlarni olish
// const signupForm = document.getElementById("signupForm");
// const loginForm = document.getElementById("loginForm");

// const goLogin = document.getElementById("goLogin");
// const goSignup = document.getElementById("goSignup");

// // LOGIN ga o'tish
// goLogin.addEventListener("click", function () {
//   signupForm.classList.add("hidden");
//   loginForm.classList.remove("hidden");
// });

// // SIGN UP ga qaytish
// goSignup.addEventListener("click", function () {
//   loginForm.classList.add("hidden");
//   signupForm.classList.remove("hidden");
// });



const signupForm = document.getElementById("signupform")
const loginForm = document.getElementById("loginform")

const goLogin = document.getElementById("goLogin")
const goSignup = document.getElementById("goSignup")

goLogin.addEventListener("click", function(){
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
})

goSignup.addEventListener("click", function(){
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
})

