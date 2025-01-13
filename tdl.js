// Get references to DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Add event listener to the "Add" button
addTaskButton.addEventListener("click", addTask);

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item for the task
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");
  taskItem.style.alignItems = "center";

  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-button ml-20">Delete</button>
  `;

  // Add delete functionality
  const deleteButton = taskItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => taskItem.remove());

  // Append the new task to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";
}

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
