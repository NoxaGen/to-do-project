let userInput = document.querySelector('input');
const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul')
const taskArr = [];
let deleteTasks = [];
let singleInput;

const userValue = (e) => {

    singleInput = e.target.value;
}

const createTask = (e) => {

    e.preventDefault();
    taskArr.push(singleInput);
    const preTask = document.createElement('li');
    preTask.classList.add('activeLi');
    preTask.textContent = singleInput;
    preTask.innerHTML = '<button class="taskDone"><i class="fas fa-check-circle"></i></button>' + preTask.textContent +
        '<button class="deleteTask"><i class="fas fa-minus-circle"></i></button>';
    tableUl.appendChild(preTask);

    deleteTasks = [...document.querySelectorAll('.table ul li .deleteTask')];

    userInput.value = '';

    deleteTasks.forEach(delTask => {
        delTask.addEventListener('click', function () {
            delTask.parentNode.remove();
        });
    });



}


// const taskRemover = (e) => {
//     e.deleteTask.parentNode.remove();
// }

// deleteTasks.forEach(delTask => {
//     delTask.addEventListener('click', function () {
//         console.log('working')
//     });
// });

// addEventListener('click', taskRemover);

userInput.addEventListener('input', userValue);

addButton.addEventListener('click', createTask);