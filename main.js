const userInput = document.querySelector('input');
const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul')
const taskArr = [];
let deleteTask;
let singleInput;

const userValue = (e) => {

    singleInput = e.target.value;
}

const createTask = (e) => {

    e.preventDefault();
    // taskArr.push(singleInput);
    const preTask = document.createElement('li');
    preTask.classList.add('activeLi');
    preTask.textContent = singleInput;
    // const liElement = document.querySelector('li:last-child');
    // preTask.innerHTML = "<button class='taskDone'><i class='fas fa-check-circle'></button>" + preTask.textContent + "<button class='deleteTask'><i class='fas fa-minus-circle'></button>";
    preTask.innerHTML = '<button class="taskDone"><i class="fas fa-check-circle"></i></button>' + preTask.textContent +
        '<button class="deleteTask"><i class="fas fa-minus-circle"></i></button>';
    tableUl.appendChild(preTask);
    deleteTask = document.querySelectorAll('.table ul li .deleteTask');


}



userInput.addEventListener('input', userValue);

addButton.addEventListener('click', createTask);