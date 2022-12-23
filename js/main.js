const quanlyTask = new TaskManager;
const valdiation = new Valdiation;
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
getLocalData()
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
                    <span class="buttons"  id="removeTask" onclick="deleteTask('${task.description}')"><i class="fa fa-trash-alt remove"></i></span>
                    <span class="buttons" id="complete_button" onclick="completeTask('${task.description}')"><i class="fa fa-check-circle complete"></i></span>
               </div>
         </li>`
    })
    completeTask.map((task, index) => {
        completeContent += `<li>${task.description}
        <div>
              <span class="buttons" id="removeTask" onclick="deleteTask('${task.description}')"><i class="fa fa-trash-alt remove"></i></span>
          <span class="buttons" id="complete_button" onclick="uncompleteTask('${task.description}')"><i class="fa fa-check-circle complete fas"></i></span>
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
    var isValid= true
    isValid &= valdiation.checkEmpty(taskDesc, 'Bạn chưa nhập dữ liệu kìa!!!!') && valdiation.checkExisted(taskDesc, 'Công việc bạn đang thêm đã tồn tại!!!', quanlyTask.taskArray)
     if(isValid) {var newTask = new Task(taskDesc, 'undone')
    quanlyTask.themTask(newTask)
    setLocalData()
    getLocalData()
}
}
function deleteTask(desc) {
    quanlyTask.xoaTask(desc)
    setLocalData()
    getLocalData()
}
function completeTask(desc) {
    quanlyTask.hoanthanhTask(desc)
    setLocalData()
    getLocalData()
}
function uncompleteTask(desc) {
    quanlyTask.chuahoanthanhTask(desc)
    setLocalData()
    getLocalData()
}
function sortAtoZ() {
    var sortArray = quanlyTask.taskArray
    sortArray.sort((a, b) => {
        const nameA = a.description.toUpperCase(); // ignore upper and lowercase
        const nameB = b.description.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;

    })
    console.log(sortArray)
    showData(sortArray)
}


function sortZtoA() {
    var sortArray = quanlyTask.taskArray
    sortArray.sort((a, b) => {
        const nameA = a.description.toUpperCase(); // ignore upper and lowercase
        const nameB = b.description.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;

    })
    sortArray = sortArray.reverse()
    console.log(sortArray)
    showData(sortArray)
}
