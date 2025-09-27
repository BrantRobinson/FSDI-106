const API="https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function test() {
    $.ajax({
        type: "GET",
        url: API,
        success: function(working) {
            console.log(working);
        },
        error: function(err) {
            console.log(err);
        }
    })
}

let tasks = loadTasks();

function init() {
    console.log("init");

    tasks.forEach(task => {
        displayTask(task);
    });
}

function loadTasks() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    console.log(JSON.parse(stored));
    return JSON.parse(stored);
  }
  return [];
}

function addTask() {
    const title = $("#title").val();
    const description = $("#description").val();
    const color = $("#color").val();
    const startDate = $("#startDate").val();
    const status = $("#status").val();
    const budget = $("#budget").val();

    const newTask = new Task(title, description, color, startDate, status, budget);

    tasks.push(newTask);
    displayTask(newTask);

    $("#form input, #form textarea, #form select").val("");
    $("#color").val("#8000FF");

    console.log(tasks);

    saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("Tasks saved to localStorage");
}

$("#btnSave").click(function(e) {
    e.preventDefault();
    addTask();
});

function displayTask(newTask) {
    let shortDescription = newTask.description;
    if (shortDescription.length > 100) {
        shortDescription = shortDescription.substring(0, 100) + "...";
    }   

    const render = `
    <div class="task-row">
        <div class="task-color" style="background-color: ${newTask.color};">
        </div>
        <div class="task-main">
            <div class="task-title-description">
                <h4>${newTask.title}</h4>
                <p>${shortDescription}</p>
            </div>
            <div class="task-status">
                    ${newTask.status}
                </div>
            <div class="task-right-content">
                <div class="task-date">
                    ${newTask.startDate}
                </div>
                <div class="task-budget">
                    $${newTask.budget}
                </div>
            </div>
        </div>
    </div>`;
    $(".tasks").append(render);
}

window.onload = init;








