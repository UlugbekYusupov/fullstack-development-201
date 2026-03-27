const taskList = document.querySelector('#taskList');


let tasksDb = [
    {
        id: 1,
        name: "Task1",
        desc: "Description for Task 1",
        status: "Pending"
    },
    {
        id: 2,
        name: "Task2",
        desc: "Description for Task 1",
        status: "Progress"
    },
    {
        id: 3,
        name: "Task3",
        desc: "Description for Task 1",
        status: "Completed"
    }
]


const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("close");
const saveBtn = document.getElementById('save');

function deleteTask(id){
    let tasks = tasksDb.filter((e) => e.id !== id)
    tasksDb = tasks
    renderTasks()
}

saveBtn.addEventListener('click', function(){
    let name = document.getElementById('title'),
    desc = document.getElementById('desc'),
    status = document.getElementById('status')

    const newTask = {
        id: tasksDb.length + 1,
        name: name.value,
        desc: desc.value,
        status: status.value
    }

    tasksDb.unshift(newTask)
    renderTasks()
    name.value = ''
    desc.value = ''
    status.value = 'pending'
    modal.style.display = 'none'
})

addBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = (event) => {
    modal.style.display = "none";
};

function renderTasks() {
    taskList.innerHTML = ''
    tasksDb.forEach(element => {
        data = `
        <div class="task">
                <div>
                    <h3>${element.name}</h3>
                    <p>${element.desc}</p>
                    <button class="delete" onclick="deleteTask(${element.id})">Delete</button>
                </div>
                <span class="status ${element.status}">${element.status}</span>
            </div>`

        taskList.innerHTML += data
    });
}
renderTasks()