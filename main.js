let userInput = document.querySelector('input');
const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul')
let taskArr = [];
let completedTasks = [];
let singleInput; //need this var for global use, it will store value of input



//function get input value and pass it into global var
const userValue = (e) => {

    singleInput = e.target.value;
    if (singleInput.length >= 29) {
        return (alert('Zadanie może mieć maksymalnie 29 znaków.'))
    }
}

// function add event on clicked check-button on the todo list
const completeTask = (e) => {
    e.target.parentNode.style.textDecoration = "line-through";
    e.target.parentNode.style.color = "grey";
    e.target.parentNode.style.backgroundColor = "rgba(172, 255, 47, 0.232)";
    completedTasks.push(e.target.parentNode);
    e.target.disabled = "disabled";
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
    taskArr.push(preTask);
    taskArr.forEach((task, key) => {
        task.dataset.key = key;
    });
    userInput.value = '';
    singleInput = '';

    preTask.querySelector('.deleteTask').addEventListener('click', function () {
        this.parentNode.remove();

        const index = this.parentNode.dataset.key;
        taskArr.splice(index, 1);
    })

    preTask.querySelector('.taskDone').addEventListener('click', completeTask);


}

userInput.addEventListener('input', userValue);

addButton.addEventListener('click', createTask);