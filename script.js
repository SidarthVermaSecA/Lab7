let addTask = document.getElementById("addTask");
let newTask = document.getElementById("input"); 
let taskLists = document.getElementById("toDoTasks");
let isChecked = document.getElementsByClassName("task-checkbox");


addTask.addEventListener("click", function(){

    var listItem = document.createElement("li")
    listItem.className = "listItem"
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    const delTask = document.createElement('button');
    delTask.innerHTML = "Delete"
    listItem.innerText = newTask.value + " ";
    taskLists.appendChild(listItem);
    listItem.appendChild(checkbox);
    listItem.appendChild(delTask);
    newTask.value = '';
    delTask.onclick= function(){
        taskLists.removeChild(listItem);
    }
    
    checkbox.onclick= function(){
        listItem.style.textDecoration = "line-through";
    }
})




