document.addEventListener("DOMContentLoaded", function() {
  const inputField = document.querySelector("#newtask input");
  const addButton = document.querySelector("#push");
  const taskList = document.querySelector("#tasks");

  // Function to add a new task
  function addTask(taskContent) {
    if (taskContent.trim() !== "") {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task");
      taskItem.innerHTML = `
        <span>${taskContent}</span>
        <button class="delete">Delete</button>
      `;
      taskList.appendChild(taskItem);
      inputField.value = ""; // Clear the input field
      addDeleteListener(taskItem);
    }
  }

  // Function to delete a task
  function deleteTask(taskItem) {
    taskItem.remove();
  }

  // Function to add event listener for delete button
  function addDeleteListener(taskItem) {
    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener("click", function() {
      deleteTask(taskItem);
    });
  }

  // Event listener for adding a new task
  addButton.addEventListener("click", function() {
    const taskContent = inputField.value;
    addTask(taskContent);
  });

  // Event listener for pressing Enter key to add a new task
  inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const taskContent = inputField.value;
      addTask(taskContent);
    }
  });
});
