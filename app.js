const form = document.querySelector('form')
const tasksList = document.querySelector('.collection')
const clearTasksBtn = document.querySelector('#clear-all-tasks')

form.addEventListener('submit', addTask)
tasksList.addEventListener('click', deleteTask)
clearTasksBtn.addEventListener('click', deleteAllTasks)

function deleteAllTasks() {
    // tasksList.innerHTML = ''
    while(tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild)
    }
}

function deleteTask(e) {
    if(e.target.textContent == 'X') {
        if(confirm("Do you want to delete this task?")) {
            e.target.parentElement.remove()
        }
    }
}

function addTask(event) {
    // user input
    const taskText = document.querySelector('#task').value

    // add DOM element - begin
    let li = document.createElement('li')
    li.className = 'collection-item'
    let liText = document.createTextNode(taskText)
    li.appendChild(liText)

    let a = document.createElement('a')
    a.className = 'teal-text lighten-2 secondary-content'
    let aText = document.createTextNode('X')
    a.appendChild(aText)
    a.setAttribute('href', '#')

    li.appendChild(a)

    const ul = document.querySelector('ul')
    ul.appendChild(li)
    // add DOM element - end

    //add task to localStorage
    let tasks // array for user input
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(taskText)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    document.querySelector('#task').value = ''
    event.preventDefault()
}

//this is a JS comment