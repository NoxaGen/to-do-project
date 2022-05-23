const userInput = document.querySelector('input');
const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul')
const taskArr = [];
const deleteTask = document.querySelector()
let singleInput;

const userValue = (e) => {
    console.log(e.target.value)
    singleInput = e.target.value;



}

const createTask = (e) => {
    console.log('working createTask');
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

}

userInput.addEventListener('input', userValue);

addButton.addEventListener('click', createTask);