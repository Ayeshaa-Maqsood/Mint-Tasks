document.getElementById('add-task-plus-btn').addEventListener('click', addTask);
document.getElementById('delete-all-btn').addEventListener('click', deleteAllTasks);

function addTask() {
    const taskList = document.getElementById('task-list');

    const newTask = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const input = document.createElement('input');
    // const input = document.createElement('textarea');
    input.type = 'text';
    input.classList.add('task-input');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash" style="color: #4a5847;"></i>';

    deleteBtn.onclick = function () {
        taskList.removeChild(newTask);
    };

    newTask.appendChild(checkbox);
    newTask.appendChild(input);
    newTask.appendChild(deleteBtn);

    taskList.appendChild(newTask);

    input.focus();

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            input.style.textDecoration = 'line-through';
        } else {
            input.style.textDecoration = 'none';
        }
    });

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            this.blur();
        }
    });
}

function deleteAllTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
}


document.getElementById('add-task-plus-btn').addEventListener('click', function() {
    this.classList.add('clicked');
    
    setTimeout(() => {
        this.classList.remove('clicked');  // Reset back after the animation
    }, 100);  // Duration for the pop-up effect
});
