var addBtn = document.getElementById("add-task")
var taskIp = document.getElementById("task")
var taskList = document.getElementById("tasks")

addBtn.addEventListener("click", function(){
    var task = taskIp.value
    addTask(task)
    taskIp.value = ""
})

function addTask(task) {
    var li = document.createElement("li")
    li.innerHTML = task
    taskList.appendChild(li)
}