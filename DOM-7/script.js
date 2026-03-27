const TaskList = document.getElementById("taskList");

let tasks = [
    {
        id: 1,
        name: "Task 1",
        description: "Description for Task 1",
        status: "pending"
    },
    {
        id: 2,
        name: "Task 2",
        description: "Description for Task 2",
        status: "in progress"
    },
    {
        id: 3,
        name: "Task 3",
        description: "Description for Task 3",
        status: "completed"
    },
]

function addTask(data){
    tasks
}

function deleteTask(id){
    tasks = tasks.filter((e) => e.id !== id)
    renderTasks(tasks)
}

function renderTasks(db) {
    TaskList.innerHTML = ''
    db.forEach(element => {
        data = `
        <div class="task">
                <div>
                    <h3>${element.name}</h3>
                    <p>${element.description}</p>
                    <button class="delete", onclick="deleteTask(${element.id})">Delete</button>
                </div>
                <span class="status ${element.status}">${element.status}</span>
        </div>
        `
        TaskList.innerHTML += data
    });
}
renderTasks(tasks)

const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("close");

addBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = (event) => {
    modal.style.display = "none";
};