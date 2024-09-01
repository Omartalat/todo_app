let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksdiv = document.querySelector(".tasks");

// TODO-4: make tasks variable equal to local storage
let tasks = [];
if (localStorage.getItem("Tasks")) {
  tasks = JSON.parse(localStorage.getItem("Tasks"));
}

getTasks(tasks);

// TODO-1: Add the task to tasks array

submit.onclick = function () {
  if (input.value !== "") {
    addTask(input.value);
    input.value = "";
  }
};

function addTask(taskTitle) {
  const task = {
    id: Date.now(),
    title: taskTitle,
    completed: false,
  };
  tasks.push(task);
  updateTasks(tasks);
  showTasks(tasks);
}

//TODO-5: task status deleted or done
tasksdiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteTask(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    // Toggle Completed For The Task
    toggleStatusTask(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }
});

// TODO-2 : show tasks in the page

function showTasks(tasks) {
  tasksdiv.innerHTML = "";
  tasks.forEach((task) => {
    // create div for each task
    let div = document.createElement("div");
    div.className = "task";
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    tasksdiv.appendChild(div);

    // create btn for each task
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
  });
}

// TODO-3 : save tasks in local Storage.

function updateTasks(tasks) {
  window.localStorage.setItem("Tasks", JSON.stringify(tasks));
}

function getTasks() {
  let data = window.localStorage.getItem("Tasks");
  if (data) {
    tasks = JSON.parse(data);
    showTasks(tasks);
  }
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id != taskId);
  updateTasks(tasks);
}

function toggleStatusTask(taskId) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == taskId) {
      tasks[i].completed == false
        ? (tasks[i].completed = true)
        : (tasks[i].completed = false);
    }
  }
  updateTasks(tasks);
}
