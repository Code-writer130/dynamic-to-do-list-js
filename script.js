document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // Load tasks without saving again
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Remove task functionality
    removeButton.onclick = function () {
      taskList.removeChild(li);
      removeFromLocalStorage(taskText); // Also remove task from Local Storage
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Save to Local Storage if 'save' is true
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    taskInput.value = ""; // Clear the input field
  }

  // Function to remove a task from Local Storage
  function removeFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Add event listener for button click
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    addTask(taskText);
  });

  // Add event listener for pressing Enter key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      addTask(taskText);
    }
  });

  // Load tasks when the page loads
  loadTasks();
});
