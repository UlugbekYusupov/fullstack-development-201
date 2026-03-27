const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("close");

addBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = (event) => {
    modal.style.display = "none";
};