// Add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
  `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

// Mark task as completed
function toggleTask(element) {
  element.parentElement.classList.toggle("completed");
}

// Delete task
function deleteTask(button) {
  button.parentElement.remove();
}
