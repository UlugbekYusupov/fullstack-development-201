const DB = [
  {
    id: 1,
    username: "timmy",
    email: "timmy210@mail.ru",
    password: "tim123three",
  },
  {
    id: 2,
    username: "jhon138",
    email: "jhonmedoe@yandex.ru",
    password: "hiddenpass123",
  },
  {
    id: 3,
    username: "micheal",
    email: "mii3@gmail.com",
    password: "michel12DEV",
  },
  {
    id: 4,
    username: "abbosjon",
    email: "admin@gnail.com",
    password: "admin123",
  },
];

const loginBtn = document.querySelector("form p"),
  qAll = document.querySelectorAll(".wrapper"),
  sBtn = document.querySelector(".secondary-btn");

sBtn.addEventListener("click", (e) => {
  e.preventDefault();
  qAll[0].classList.toggle("hide");
  qAll[1].classList.toggle("hide");
});

loginBtn.addEventListener("click", (e) => {
  qAll[0].classList.toggle("hide");
  qAll[1].classList.toggle("hide");
});

function showAlert(text, type = "success") {
  const alertMessage = document.querySelector(".message");
  alertMessage.classList.add("show");
  alertMessage.innerHTML = `<p class="${type}-msg">${text}</p>`;

  setTimeout(() => {
    alertMessage.classList.remove("show");
  }, 2000);
}

function loginUser(id) {
  console.log("Login clicked");

  //   const user = DB.find(u => u.id === Number(id));

  //   const body = document.querySelector('body')
  //   body.innerHTML = ""
  //   const newEL = document.createElement("div")
  //   newEL.classList.add('user-page')
  //   newEL.innerHTML = `
  //   <h2>Hello, ${user.username}</h2>
  //   <p>Your email:  ${user.email}</p>
  //   <button id="logout">Log Out</button>`
  //   body.appendChild(newEL)

  //   document.querySelector('#logout').addEventListener('click', () => {
  //       localStorage.clear()
  //       window.location.reload();
  //   })
}

const loginB = document.getElementById("login");
const signupB = document.getElementById("signup");

loginB.addEventListener("click", async function (e) {
  e.preventDefault();

  const username = document.getElementById("login-username2").value.trim();
  const password = document.getElementById("login-pass").value.trim();

  if (!username || !password) {
    showAlert("Please fill all fiels!", "error");
    return 0;
  }

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      showAlert(data.message, "error");
    }
    console.log(data);

    showAlert(data.message);
  } catch (err) {
    console.log(err);
  }

  //   const user = DB.find(
  //     (u) =>
  //       (u.username === username || u.email === username) &&
  //       u.password === password,
  //   );

  //   if (!user) {
  //     showAlert("The Username or Password is Incorrect. Try again.", "error");
  //     return 0;
  //   }
  //   showAlert("Yo're successfully logged in!");
  //   setTimeout(() => {
  //     loginUser(user.id);
  //     localStorage.setItem("user-id", user.id);
  //   }, 2000);
});

signupB.addEventListener("click", async function (e) {
  e.preventDefault();

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const email = document.getElementById("login-email").value.trim();

  if (!username || !password || !email) {
    showAlert("Please fill all fiels!", "error");
    return 0;
  }

  const newUser = {
    username,
    email,
    password,
  };

  try {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    if (!response.ok) {
      showAlert(data.message, "error");
      return;
    }

    showAlert(data.message);
  } catch (err) {
    console.log(err);
  }

  setTimeout(() => {
    loginUser(newUser.id);
    localStorage.setItem("user-id", newUser.id);
  }, 2000);
});

try {
  const user_id = localStorage.getItem("user-id");
  if (user_id) {
    loginUser(user_id);
  }
} catch {
  localStorage.clear();
  window.location.reload();
}
