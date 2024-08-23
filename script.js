document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        newTaskInput.value = '';
    }

    
    addTaskBtn.addEventListener('click', addTask);

    
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
