let userInput = document.querySelector('input');
const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul')
let tasksOnTable = [];
let completedTasks = [];
let singleInput; //need this var for global use, it will store value of input

//functions

const userValue = (e) => {
    singleInput = e.target.value;
    if (singleInput.length >= 29) {
        return (alert('Zadanie może mieć maksymalnie 29 znaków.'))
    }
}
const completeTask = (e) => {
    e.currentTarget.parentElement.style.textDecoration = "line-through";
    e.currentTarget.parentElement.style.color = "grey";
    e.currentTarget.parentElement.style.backgroundColor = "rgba(172, 255, 47, 0.232)";
    completedTasks.push(e.currentTarget.parentElement);
    e.currentTarget.disabled = "disabled"; //block possibility of multiply clicking same button
    console.log(e.currentTarget)
}

const removeTask = (e) => {
    e.currentTarget.parentNode.remove();
    const index = e.currentTarget.parentNode.dataset.key;
    tasksOnTable.splice(index, 1);
}

const createTask = (e) => {

    if (!singleInput) {
        e.preventDefault();
        return (alert("Pole nie może być puste."))
    }
    e.preventDefault();
    const preTask = document.createElement('li');
    preTask.classList.add('activeLi');
    preTask.textContent = singleInput.toLowerCase();
    preTask.innerHTML = '<button class="taskDone"><i class="fas fa-check-circle"></i></button>' + preTask.textContent +
        '<button class="deleteTask"><i class="fas fa-minus-circle"></i></button>';
    tableUl.appendChild(preTask);
    tasksOnTable.push(preTask);
    tasksOnTable.forEach((task, key) => {
        task.dataset.key = key;
    });
    userInput.value = '';
    singleInput = '';

    preTask.querySelector('.deleteTask').addEventListener('click', removeTask);
    preTask.querySelector('.taskDone').addEventListener('click', completeTask);
}

//controls
userInput.addEventListener('input', userValue);
addButton.addEventListener('click', createTask);