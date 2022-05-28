const addButton = document.querySelector('button');
let tableUl = document.querySelector('.table ul');
const hintsUl = document.querySelector('.hints ul');
const hintsElements = document.querySelectorAll('.hints ul li');
const hintsButtons = [...document.querySelectorAll('.hints ul li button')];
let userInput = document.querySelector('input');
let tasksOnTable = [];
let completedTasks = [];
let singleInput;


// ZROBIC TAK ABY INPUT BYL PUSHOWANY DO ARRAYA I Z ARRAYA WYWALAC NA TABLE ALL TASKI?
// W TEN SPOSOB LATWO BEDZIE PUSHOWAC HINTY DO ARRAYA


//functions
const userValue = (e) => {
    singleInput = e.target.value;
    if (singleInput.length >= 30) {
        return (alert('Zadanie może mieć maksymalnie 30 znaków.'))
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

const searchHint = (e) => {
    const searchText = e.target.value;
    let hints = [...hintsElements]
    hints = hints.filter(li => li.textContent.toLowerCase().includes(searchText));
    hintsUl.textContent = '';
    hintsUl.textContent = hints.textContent;
    hints.forEach(hint => hintsUl.appendChild(hint))
};

const createTask = (e) => {
    if (!singleInput) {
        e.preventDefault();
        return (alert("Pole nie może być puste."))
    }
    e.preventDefault();

    let preTask = document.createElement('li');
    preTask.textContent = singleInput.toLowerCase();
    preTask.innerHTML = '<button class="taskDone" title="Zadanie wykonane"><i class="fas fa-check-circle"></i></button>' + preTask.textContent +
        '<button class="deleteTask" title="Usuń niepotrzebne zadanie"><i class="fas fa-minus-circle"></i></button>';
    preTask.classList.add('activeLi');
    tasksOnTable.push(preTask);
    tasksOnTable.forEach((liElement, key) => {
        tableUl.appendChild(liElement);
        liElement.dataset.key = key;
    });
    userInput.value = '';
    singleInput = '';

    // //li buttons controls
    preTask.querySelector('.deleteTask').addEventListener('click', removeTask);
    preTask.querySelector('.taskDone').addEventListener('click', completeTask);
    publishSummary();
}

const pushHint = (e) => {
    e.preventDefault();

    let preTask = document.createElement('li');
    preTask.textContent = e.target.parentElement.firstChild.textContent;
    preTask.innerHTML = '<button class="taskDone" title="Zadanie wykonane"><i class="fas fa-check-circle"></i></button>' + preTask.textContent +
        '<button class="deleteTask" title="Usuń niepotrzebne zadanie"><i class="fas fa-minus-circle"></i></button>';
    preTask.classList.add('activeLi');



    tasksOnTable.push(preTask);
    tasksOnTable.forEach((liElement, key) => {
        tableUl.appendChild(liElement);
        liElement.dataset.key = key;
    });


    preTask.querySelector('.deleteTask').addEventListener('click', removeTask);
    preTask.querySelector('.taskDone').addEventListener('click', completeTask);


    publishSummary();


}


//controls
userInput.addEventListener('input', userValue); //get input value and pass it into global var
userInput.addEventListener('input', searchHint); //every input action searching fitted elements in hints
addButton.addEventListener('click', createTask); //creating new task in todo-list and pushing it into array
addButton.addEventListener('click', searchHint); //another call of this functions refresh list in hints after task add
hintsButtons.forEach(button => button.addEventListener('click', pushHint)); //if user find task he want to add, after click btn it push it to the array and to-do list