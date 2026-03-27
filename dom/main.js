let taskD = [
    {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        completed: false
    },
    {
        id: 2,
        title: "Task 2",
        description: "Description 2",
        completed: true
    },
    {
        id: 3,
        title: "Task 3",
        description: "Description 3",
        completed: false
    }
]

const  model = document.getElementById('model');
const addBtn = document.getElementById("addbtn")
const closebtn = document.getElementById("closebtn")

function deleteTask(id){
    let task = model.querySelector(`[data-id="${id}"]`);
    };

function renderTasks(db){
    db.array.forEach(element => {
    });
}




























// let taskCount = 3;
 
//   function deleteTask(btn) {
//     btn.closest('.task-card').remove();
//   }
 
//   function addTask() {
//     taskCount++;
//     const statuses = [
//       { label: 'pending',     cls: 'pending' },
//       { label: 'in progress', cls: 'in-progress' },
//       { label: 'completed',   cls: 'completed' }
//     ];
//     const s = statuses[taskCount % 3];
 
//     const card = document.createElement('div');
//     card.className = 'task-card';
//     card.innerHTML = `
//       <div class="task-title">Task ${taskCount}</div>
//       <div class="task-desc">Description for Task ${taskCount}</div>
//       <span class="badge ${s.cls}">${s.label}</span>
//       <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
//     `;
//     document.getElementById('task-list').appendChild(card);
//   }