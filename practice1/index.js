const taskList = document.getElementById("taskList");
const taskModal = document.getElementById("taskModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveTaskBtn = document.getElementById("saveTaskBtn");
const taskTitleInput = document.getElementById("taskTitleInput");
const taskDescInput = document.getElementById("taskDescInput");
const taskStatusInput = document.getElementById("taskStatusInput");

let tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description for Task 1",
    status: "pending",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description for Task 2",
    status: "in progress",
  }
];

function getStatusClass(status) {
  if (status === "pending") return "status-pending";
  if (status === "in progress") return "status-in-progress";
  return "status-completed";
}

function createTaskCard(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  const taskContent = document.createElement("div");
  taskContent.className = "task-content";

  const title = document.createElement("h3");
  title.className = "task-title";
  title.textContent = task.title;

  const desc = document.createElement("p");
  desc.className = "task-desc";
  desc.textContent = task.description;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  taskContent.appendChild(title);
  taskContent.appendChild(desc);
  taskContent.appendChild(deleteBtn);

  const taskActions = document.createElement("div");
  taskActions.className = "task-actions";

  const statusBadge = document.createElement("span");
  statusBadge.className = `status-badge ${getStatusClass(task.status)}`;
  statusBadge.textContent = task.status;

  taskActions.appendChild(statusBadge);

  taskCard.appendChild(taskContent);
  taskCard.appendChild(taskActions);

  return taskCard;
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Hozircha task yo‘q.";
    taskList.appendChild(empty);
    return;
  }

  tasks.forEach((task) => {
    const card = createTaskCard(task);
    taskList.appendChild(card);
  });
}

function openModal() {
  taskModal.classList.add("show");
}

function closeModal() {
  taskModal.classList.remove("show");
  clearForm();
}

function clearForm() {
  taskTitleInput.value = "";
  taskDescInput.value = "";
  taskStatusInput.value = "pending";
}

function addTask() {
  const title = taskTitleInput.value.trim();
  const description = taskDescInput.value.trim();
  const status = taskStatusInput.value;

  if (!title || !description) {
    alert("Title va Description ni to‘ldiring.");
    return;
  }

  const newTask = {
    id: Date.now(),
    title,
    description,
    status,
  };

  tasks.push(newTask);
  renderTasks();
  closeModal();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
saveTaskBtn.addEventListener("click", addTask);

taskModal.addEventListener("click", (e) => {
  if (e.target === taskModal) {
    closeModal();
  }
});

renderTasks();