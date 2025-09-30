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


function init() {
    console.log("init");

    let tasks = loadTasks();

   
}

// function loadTasks() {
//   const stored = localStorage.getItem("tasks");
//   if (stored) {
//     console.log(JSON.parse(stored));
//     return JSON.parse(stored);
//   }
//   return [];
// }

function loadTasks() {
    $.ajax({
        type: "get",
        url: API,
        dataType: "json",
        success: function(res){
            console.log(res);

            res.forEach(task => {
                // if (task.name === "Brant") {
                    displayTask(task);
                // }
    });
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function addTask() {
    const title = $("#title").val();
    const description = $("#description").val();
    const color = $("#color").val();
    const date = $("#date").val();
    const status = $("#status").val();
    const budget = $("#budget").val();

    const newTask = new Task(title, description, color, date, status, budget);

    // displayTask(newTask);


    $("#form input, #form textarea, #form select").val("");
    $("#color").val("#8000FF");


    $.ajax({
        type: "post",
        url: API,
        data: JSON.stringify(newTask),
        contentType: "application/json",
        success: function(res){
            console.log(res);
            $(".tasks").empty();
            loadTasks();
        },
        error: function(err) {
            console.log(err);
            alert("Something went wrong");
        }
    });

    // saveTasksToLocalStorage();
}

// function saveTasksToLocalStorage() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   console.log("Tasks saved to localStorage");
// }

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
                    ${newTask.date || newTask.startDate || ""}
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


$("#showHideFormBtn").click(function(){
    $("#form").toggle();

    const btn = $("#showHideFormBtn");

    if ($("#form").is(":visible")) {
        btn.html('<i class="fa-solid fa-eye-slash"></i> Hide Form');
        btn.removeClass("active"); 
    } else {
        btn.html('<i class="fa-solid fa-eye"></i> Show Form');
        btn.addClass("active");
    }
});



