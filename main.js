let userInput = document.querySelector('input');
const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul')
const taskArr = [];
let deleteTasks = [];
let tasksDone = [];
let singleInput;
let tasksDoneCounter = 0;

const userValue = (e) => {

    singleInput = e.target.value;
    if (singleInput.length >= 25) {
        return (alert('Zadanie może mieć maksymalnie 25 znaków.'))
    }
}

const createTask = (e) => {

    if (!singleInput) {
        e.preventDefault();
        return (alert("Pole nie może być puste."))

    }

    e.preventDefault();
    taskArr.push(singleInput);
    const preTask = document.createElement('li');
    preTask.classList.add('activeLi');
    preTask.textContent = singleInput.toLowerCase();


    preTask.innerHTML = '<button class="taskDone"><i class="fas fa-check-circle"></i></button>' + preTask.textContent +
        '<button class="deleteTask"><i class="fas fa-minus-circle"></i></button>';
    tableUl.appendChild(preTask);
    userInput.value = '';
    singleInput = '';

    deleteTasks = [...document.querySelectorAll('.table ul li .deleteTask')];
    deleteTasks.forEach(delTask => {
        delTask.addEventListener('click', function () {
            delTask.parentNode.remove();
        });
    });

    tasksDone = [...document.querySelectorAll('.table ul li .taskDone')]
    tasksDone.forEach(taskDone => {
        taskDone.addEventListener('click', function () {
            taskDone.parentNode.style.textDecoration = "line-through";
            taskDone.parentNode.style.color = "grey";
            taskDone.parentNode.style.backgroundColor = "rgba(172, 255, 47, 0.232)";
            tasksDoneCounter++;
        })
    })
}

userInput.addEventListener('input', userValue);

addButton.addEventListener('click', createTask);