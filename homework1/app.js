const signup = document.getElementById("signup");
const login = document.getElementById("login");

const goLogin = document.getElementById("goLogin");
const goSignup = document.getElementById("goSignup");

goLogin.addEventListener("click", function () {
  signup.style.display = "none";
  login.style.display = "block";
});

goSignup.addEventListener("click", function () {
  login.style.display = "none";
  signup.style.display = "block";
});
