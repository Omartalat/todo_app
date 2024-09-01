let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksdiv = document.querySelector(".tasks");

// TODO-4: make tasks variable equal to local storage
let tasks = [];
if (localStorage.getItem('Tasks')) {
  tasks = JSON.parse(localStorage.getItem('Tasks'))
}


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
  let data = window.localStorage.getItem('Tasks')
  if (data) {
    tasks = JSON.parse(data)
  }
}
