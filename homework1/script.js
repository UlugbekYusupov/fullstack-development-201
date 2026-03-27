let users = [];

function showLogin() {
  document.getElementById("signupCard").classList.add("hidden");
  document.getElementById("loginCard").classList.remove("hidden");
}

function showSignup() {
  document.getElementById("loginCard").classList.add("hidden");
  document.getElementById("signupCard").classList.remove("hidden");
}

function signUp() {
  const username = document.getElementById("suUsername").value;
  const email = document.getElementById("suEmail").value;
  const password = document.getElementById("suPassword").value;

  if (!username || !email || !password) {
    alert("Barcha maydonlarni to‘ldiring");
    return;
  }

  const exists = users.find(user => user.email === email);
  if (exists) {
    alert("Bu email allaqachon mavjud!");
    return;
  }

  const newUser = {
    username,
    email,
    password
  };

  users.push(newUser);

  console.log(users); 

  alert("Ro‘yxatdan o‘tildi!");

  showLogin();
}

function login() {
  const email = document.getElementById("liEmail").value;
  const password = document.getElementById("liPassword").value;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    alert("Xush kelibsiz, " + user.username);
  } else {
    alert("Email yoki parol noto‘g‘ri");
  }
}