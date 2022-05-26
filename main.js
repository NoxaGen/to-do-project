const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul');
let userInput = document.querySelector('input');
let tasksOnTable = [];
let completedTasks = [];
let baseOfHints = ['wynieść śmieci', 'posprzątać w domu', 'posprzątać w pokoju', 'zrobić trening', 'zrobić zakupy', 'ugotować obiad', 'pomedytować', 'pouczyć się', 'popracować nad projektem', 'jechać do fryzjera', 'jechać do urzędu', 'umówić się do lekarza', 'umówić się do dentysty', 'umówić się do mechanika', 'odebrać pocztę', 'odebrać paczkę', 'zrobić porządek w garażu', 'zrobić porządek w szafie', 'zapłacić rachunki', 'czytać książkę', 'nakarmić kota', 'nakarmić psa', 'dać rybką jeść', 'naprawić kran', 'nasmarować drzwi', 'przygotować posiłki'];
let singleInput;
let howManyLeft;

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
    preTask.innerHTML = '<button class="taskDone"><i class="fas fa-check-circle"></i></button>' + preTask.textContent +
        '<button class="deleteTask"><i class="fas fa-minus-circle"></i></button>';
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