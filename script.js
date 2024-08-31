let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksdiv = document.querySelector(".tasks");
let tasks = [];

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
