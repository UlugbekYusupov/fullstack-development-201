const app = document.createElement('div');
app.id = 'app';
app.style.maxWidth = '760px';
app.style.margin = '30px auto';
app.style.padding = '20px';
app.style.border = '1px solid #ccc';
app.style.borderRadius = '10px';
app.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(app);

const title = document.createElement('h2');
title.textContent = 'DOM Amaliy Mashq';
app.appendChild(title);

const description = document.createElement('p');
description.textContent = 'Element yaratish, event, class va localStorage misollari.';
app.appendChild(description);

const form = document.createElement('form');
form.id = 'todoForm';
form.style.display = 'flex';
form.style.gap = '10px';
form.style.marginBottom = '16px';
app.appendChild(form);

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Yangi vazifa yozing...';
input.style.flex = '1';
input.style.padding = '10px';
form.appendChild(input);

const addBtn = document.createElement('button');
addBtn.type = 'submit';
addBtn.textContent = 'Qo\'shish';
addBtn.style.padding = '10px 16px';
form.appendChild(addBtn);

const filterWrap = document.createElement('div');
filterWrap.style.marginBottom = '12px';
app.appendChild(filterWrap);

const filterInput = document.createElement('input');
filterInput.type = 'text';
filterInput.placeholder = 'Qidirish...';
filterInput.style.width = '100%';
filterInput.style.padding = '10px';
filterWrap.appendChild(filterInput);

const list = document.createElement('ul');
list.style.listStyle = 'none';
list.style.padding = '0';
list.style.margin = '0';
app.appendChild(list);

const info = document.createElement('p');
info.textContent = 'Jami: 0 ta vazifa';
info.style.marginTop = '14px';
app.appendChild(info);

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Barchasini tozalash';
clearBtn.style.marginTop = '10px';
clearBtn.style.padding = '8px 12px';
app.appendChild(clearBtn);

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function updateInfo() {
  info.textContent = `Jami: ${todos.length} ta vazifa`;
}

function createTodoItem(text, done = false) {
  const li = document.createElement('li');
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';
  li.style.padding = '10px';
  li.style.border = '1px solid #ddd';
  li.style.marginBottom = '8px';
  li.style.borderRadius = '6px';

  const span = document.createElement('span');
  span.textContent = text;
  if (done) span.style.textDecoration = 'line-through';
  li.appendChild(span);

  const actions = document.createElement('div');

  const doneBtn = document.createElement('button');
  doneBtn.textContent = done ? 'Bekor qilish' : 'Bajarildi';
  doneBtn.style.marginRight = '8px';
  doneBtn.addEventListener('click', () => toggleTodo(text));
  actions.appendChild(doneBtn);

  const delBtn = document.createElement('button');
  delBtn.textContent = 'O\'chirish';
  delBtn.addEventListener('click', () => deleteTodo(text));
  actions.appendChild(delBtn);

  li.appendChild(actions);
  list.appendChild(li);
}

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo) => createTodoItem(todo.text, todo.done));
  updateInfo();
}

function addTodo(text) {
  todos.push({ text, done: false });
  saveTodos();
  renderTodos();
}

function toggleTodo(text) {
  todos = todos.map((todo) => todo.text === text ? { ...todo, done: !todo.done } : todo);
  saveTodos();
  renderTodos();
}

function deleteTodo(text) {
  todos = todos.filter((todo) => todo.text !== text);
  saveTodos();
  renderTodos();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  addTodo(value);
  input.value = '';
  input.focus();
});

filterInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  Array.from(list.children).forEach((li) => {
    const text = li.firstChild.textContent.toLowerCase();
    li.style.display = text.includes(query) ? 'flex' : 'none';
  });
});

clearBtn.addEventListener('click', () => {
  todos = [];
  saveTodos();
  renderTodos();
});

renderTodos();




//// DOM


console.log(`window ${window.innerWidth}`)
console.log(window.location.href)


