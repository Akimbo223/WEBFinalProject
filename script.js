const taskForm = document.getElementById('taskForm');
const taskManager = document.getElementById('taskmanager');

let tasks = [];
let taskId = 0;

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('taskName').value.trim();
  const priority = document.getElementById('priority').value;
  const isImportant = document.getElementById('isImportant').checked;

  if (name === "") {
    alert("Task name cannot be empty!");
    return;
  }

  const task = {
    id: taskId++,
    name,
    priority,
    isImportant,
    isCompleted: false,
    date: new Date().toLocaleString()
  };

  tasks.push(task);
  renderTasks();
  console.log(JSON.stringify(tasks));
  taskForm.reset();
});

function renderTasks() {
  taskManager.innerHTML = "";

  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = "task";
    if (task.isImportant) taskDiv.classList.add("important");
    if (task.isCompleted) taskDiv.classList.add("completed");

    taskDiv.innerHTML = `
      <strong>${task.name}</strong> - ${task.priority} Priority
      <br>Added: ${task.date}
      <br>
      <label><input type="checkbox" onchange="toggleComplete(${task.id})" ${task.isCompleted ? 'checked' : ''}> Completed</label>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;

    taskManager.appendChild(taskDiv);
  });
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
  console.log(JSON.stringify(tasks));
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.isCompleted = !task.isCompleted;
  renderTasks();
  console.log(JSON.stringify(tasks));
}
