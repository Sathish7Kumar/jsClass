function addTask(){

    const taskInput = document.getElementById("taskInput") // input_tag
    const taskList = document.getElementById("taskList") // ul_tag

    if(taskInput.value.trim()!==""){
        const list = document.createElement("li") // li_tag
        list.innerHTML = `
        ${taskInput.value} 
        <button onclick="updateTask(this)">Edit</button> 
        <button onclick="deleteTask(this)">Delete</button> 
        `
        taskList.append(list) // li_tag is append into ul_tag
    }
    taskInput.value = "" // make input_tag empty after adding the one_task
    setToLocalStorage()
}

function deleteTask(button){ // pm
    const taskList = document.getElementById("taskList") // ul_tag
    const taskItem = button.parentNode
    taskList.removeChild(taskItem)
    setToLocalStorage()
}

function updateTask(button){
   const newTask = prompt("Update Task",button.parentNode.firstChild.textContent.trim())
   if(newTask !== null && newTask.trim()){
    button.parentNode.firstChild.textContent = newTask
   }
   setToLocalStorage()
}


function setToLocalStorage(){
    const taskList = document.getElementById("taskList").innerHTML // ul_Tag having all the list tasks
     localStorage.setItem("tasks",taskList)
}

function getFromLocalStorage(){
    const taskList = document.getElementById("taskList") //ul_Tag
    const dataInLocalStorage = localStorage.getItem("tasks")
    if(dataInLocalStorage){
        taskList.innerHTML = dataInLocalStorage
    }
}

window.onload = function(){
    getFromLocalStorage()
}