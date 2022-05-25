let userInput = document.querySelector('input');
const addButton = document.querySelector('button');
const tableUl = document.querySelector('.table ul')
let taskArr = []; //all elements on table will be pushed in this array
let deleteTasks = []; //arr need for delete button comes from append childs with inner html
let tasksDone = []; // same as upper array, its for task-done button 
let completedTasks = []; //all completed tasks will be pushed into this arr
let singleInput; //need this var for global use, it will store value of e.target
let testcounter = 0;

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

    deleteTasks = [...document.querySelectorAll('.table ul li .deleteTask')];
    deleteTasks.forEach(delTask => {
        delTask.addEventListener('click', function () {
            this.parentNode.remove();

            const index = this.parentNode.dataset.key;
            taskArr.splice(index, 1);






        });


    });

    // do poprawy i sprawdzenia dlaczego sie zachowuje w ten sposob

    tasksDone = [...document.querySelectorAll('.table ul li .taskDone')]
    tasksDone.forEach(taskDone => {
        taskDone.addEventListener('click', function () {

            taskDone.parentNode.style.textDecoration = "line-through";
            taskDone.parentNode.style.color = "grey";
            taskDone.parentNode.style.backgroundColor = "rgba(172, 255, 47, 0.232)";
            completedTasks.push(taskDone.parentNode); //need this to count completed tasks
            // completedTasks.push(e.target);
            taskDone.disabled = "disabled"; //after one click button stop duplicate push
            // testcounter++;

            // upper command doesnt working! still counting from last element...
            //its working in other way but older elements beneath still adding into array

        })
    })
}

userInput.addEventListener('input', userValue);

addButton.addEventListener('click', createTask);