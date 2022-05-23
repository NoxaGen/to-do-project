const userInput = document.querySelector('input');
const addButton = document.querySelector('button');
let singleInput;

const userValue = (e) => {
    console.log(e.target.value)
    singleInput = e.target.value;
}

const createTask = (e) => {
    console.log('working createTask');
    e.preventDefault();

}

userInput.addEventListener('input', userValue);

addButton.addEventListener('click', createTask);