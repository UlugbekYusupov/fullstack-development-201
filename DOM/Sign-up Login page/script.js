const loginBtn = document.querySelector('form p'),
    qAll = document.querySelectorAll(".wrapper"),
    sBtn = document.querySelector('.secondary-btn')

sBtn.addEventListener("click", (e) => {
    e.preventDefault()
    qAll[0].classList.toggle("hide");
    qAll[1].classList.toggle("hide");
})

loginBtn.addEventListener("click", (e) => {
    qAll[0].classList.toggle("hide");
    qAll[1].classList.toggle("hide");
})