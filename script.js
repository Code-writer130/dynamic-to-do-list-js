document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn"); // Selects the "Add Task" button
  const taskInput = document.getElementById("task-input"); // Selects the input field where users enter tasks
  const taskList = document.getElementById("task-list"); // Selects the unordered list to display tasks

  function addTask() {
    const taskText = taskInput.value;

    if (taskText !== '') {
        const li = document.createElement('li'); // Create a new li element
        li.textContent = taskText; // Set the textContent to taskText

        const removeButton = document.createElement('button'); // Create a remove button
        removeButton.textContent = 'Remove'; // Set the textContent to 'Remove'
        removeButton.classList.add('remove-btn'); // Add a class to the remove button

        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the li element when clicked
        };

        li.appendChild(removeButton); // Append the remove button to the li element
        taskList.appendChild(li); // Append the li element to the taskList

        taskInput.value = ''; // Clear the task input field
    }
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

   addButton.addEventListener("click", addTask),
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  }));

