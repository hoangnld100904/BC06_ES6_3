const quanlyTask = new TaskManager;
function setLocalData() {
    localStorage.setItem('taskData', JSON.stringify(quanlyTask.taskArray))
}
function getLocalData() {
    if (localStorage.getItem('taskData') != null) {
        quanlyTask.taskArray = JSON.parse(localStorage.getItem('taskData'))
        showData(quanlyTask.taskArray)
        // addButtonEvent()
    }
}
function showData(array) {
    var undoneTask = []
    var completeTask = []
    var undoneContent = ''
    var completeContent = ''
    array.map((task) => {
        if (task.status == 'undone') {
            undoneTask.push(task)
        }
        else {
            completeTask.push(task)
        }
    })

    undoneTask.map((task, index) => {
        undoneContent += `<li>${task.description} 
              <div>
                    <span class="buttons"  id="removeTask"><i class="fa fa-trash-alt remove"></i></span>
                    <span class="buttons" id="complete_button"><i class="fa fa-check-circle complete"></i></span>
               </div>
         </li>`
    })
    completeTask.map((task, index) => {
        completeContent += `<li>${task.description}
        <div>
              <span class="buttons" id="removeTask"><i class="fa fa-trash-alt remove" onclick="quanlyTask.xoaTask(${task.description}"></i></span>
          <span class="buttons" id="complete_button"><i class="fa fa-check-circle complete"></i></span>
         </div>
   </li>`
    })
    var undoneHTML = document.getElementById('todo')
    undoneHTML.innerHTML = undoneContent
    var completeHTML = document.getElementById('completed')
    completeHTML.innerHTML = completeContent
    
}

function addNewTask() {
    var taskDesc = document.getElementById('newTask').value
    var newTask = new Task(taskDesc, 'undone')
    quanlyTask.themTask(newTask)
    setLocalData()
    getLocalData()
}
function deleteTask(id) {
    quanlyTask.xoaTask(id)
    setLocalData()
    getLocalData()
}