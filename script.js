document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn"); // Selects the "Add Task" button
  const taskInput = document.getElementById("task-input"); // Selects the input field where users enter tasks
  const taskList = document.getElementById("task-list"); // Selects the unordered list to display tasks

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    removeButton.onclick = () => {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
