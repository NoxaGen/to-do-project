const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul');
const hintsUl = document.querySelectorAll('.hints li');
let userInput = document.querySelector('input');
let tasksOnTable = [];
let completedTasks = [];
let singleInput;

//functions
const userValue = (e) => {
    singleInput = e.target.value;
    if (singleInput.length >= 29) {
        return (alert('Zadanie może mieć maksymalnie 29 znaków.'))
    }
}
const completeTask = (e) => {
    e.currentTarget.parentNode.style.textDecoration = "line-through";
    e.currentTarget.parentNode.style.color = "grey";
    e.currentTarget.parentNode.style.backgroundColor = "rgba(172, 255, 47, 0.232)";
    completedTasks.push(e.currentTarget.parentNode);
    e.currentTarget.disabled = "disabled";
    e.currentTarget.nextElementSibling.disabled = "disabled";
    publishSummary();
}

const removeTask = (e) => {
    e.currentTarget.parentNode.remove();
    const index = e.currentTarget.parentNode.dataset.key;
    tasksOnTable.splice(index, 1);
    console.log(index)
    console.log(tasksOnTable)
    tasksOnTable.forEach((task, key) => {
        task.dataset = key;
    });
    publishSummary();
}

const publishSummary = () => {
    document.querySelector('[data-summary="all-tasks"]').textContent = ' ' + tasksOnTable.length;
    document.querySelector('[data-summary="done-tasks"]').textContent = ' ' + completedTasks.length;
    document.querySelector('[data-summary="tasks-left"]').textContent = ' ' + (tasksOnTable.length - completedTasks.length);
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
    preTask.innerHTML = '<button class="taskDone" title="Zadanie wykonane"><i class="fas fa-check-circle"></i></button>' + preTask.textContent +
        '<button class="deleteTask" title="Usuń niepotrzebne zadanie"><i class="fas fa-minus-circle"></i></button>';
    tableUl.appendChild(preTask)
    tasksOnTable.push(preTask);
    tasksOnTable.forEach((task, key) => {
        task.dataset = key;
    });

    userInput.value = '';
    singleInput = '';

    //li buttons controls
    preTask.querySelector('.deleteTask').addEventListener('click', removeTask);
    preTask.querySelector('.taskDone').addEventListener('click', completeTask);
    publishSummary();
}

//controls
userInput.addEventListener('input', userValue);
addButton.addEventListener('click', createTask);