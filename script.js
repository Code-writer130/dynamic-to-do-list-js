document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn"); // Select the "Add Task" button
  const taskInput = document.getElementById("task-input"); // Select the input field where users enter tasks
  const taskList = document.getElementById("task-list"); // Select the unordered list to display tasks

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value;

    if (taskText !== "") {
      const li = document.createElement("li"); // Create a new li element
      li.textContent = taskText; // Set the textContent to taskText

      const removeButton = document.createElement("button"); // Create a remove button
      removeButton.textContent = "Remove"; // Set the textContent to 'Remove'
      removeButton.classList.add("remove-btn"); // Add a class to the remove button

      removeButton.onclick = function () {
        taskList.removeChild(li); // Remove the li element when clicked
      };

      li.appendChild(removeButton); // Append the remove button to the li element
      taskList.appendChild(li); // Append the li element to the taskList

      taskInput.value = ""; // Clear the task input field
    }
  }

  // Add event listener for button click
  addButton.addEventListener("click", addTask);

  // Add event listener for pressing Enter key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
