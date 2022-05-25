let userInput = document.querySelector('input');
const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul')
let taskArr = []; //all elements on table will be pushed in this array
let completedTasks = []; //all completed tasks will be pushed into this arr
let singleInput; //need this var for global use, it will store value of e.target

const userValue = (e) => {

    singleInput = e.target.value;
    if (singleInput.length >= 29) {
        return (alert('Zadanie może mieć maksymalnie 29 znaków.'))
    }
}

const createTask = (e) => {

    if (!singleInput) {
        e.preventDefault();
        return (alert("Pole nie może być puste."))

    }

    e.preventDefault();
    // taskArr.push(singleInput);

    // taskArr.forEach((task, key) => {
    //     task.dataset.key = key;
    // });

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


    //problem solved - foreach making every element beneath clicked removed too, dynamic query selector fixed it 
    preTask.querySelector('.deleteTask').addEventListener('click', function () {
        this.parentNode.remove();

        const index = this.parentNode.dataset.key;
        taskArr.splice(index, 1);
    })

    // NAPRAWIONE hellyeah , to samo co upper foreach powodwal buga


    preTask.querySelector('.taskDone').addEventListener('click', function () {

        this.parentNode.style.textDecoration = "line-through";
        this.parentNode.style.color = "grey";
        this.parentNode.style.backgroundColor = "rgba(172, 255, 47, 0.232)";
        completedTasks.push(this.parentNode);
        this.disabled = "disabled";

    })



}

userInput.addEventListener('input', userValue);

addButton.addEventListener('click', createTask);