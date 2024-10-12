document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn"); // Select the "Add Task" button
  const taskInput = document.getElementById("task-input"); // Select the input field where users enter tasks
  const taskList = document.getElementById("task-list"); // Select the unordered list to display tasks

  // Function to add a task
  // Function to add a new task
  function addTask() {
    // Get the value from the input field and trim whitespace
    const taskText = taskInput.value.trim();

    // Check if the taskText is empty
    if (taskText === "") {
      // Alert the user if the input field is empty
      alert("Please enter a task!");
      return; // Exit the function if no task is entered
    }

    // If taskText is not empty, proceed with adding the task
    const li = document.createElement("li"); // Create a new li element
    li.textContent = taskText; // Set the textContent to the taskText

    const removeButton = document.createElement("button"); // Create a remove button
    removeButton.textContent = "Remove"; // Set the textContent to 'Remove'
    removeButton.classList.add("remove-btn"); // Add a class to the remove button

    // Functionality to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li); // Remove the li element when clicked
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li element to the task list
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
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
