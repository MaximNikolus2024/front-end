const tasks = [];
        const taskList = document.getElementById('taskList');
        const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const showAllButton = document.getElementById('showAll');
        const showCompletedButton = document.getElementById('showCompleted');
        const showIncompleteButton = document.getElementById('showIncomplete');

        function renderTasks(filter) {
            taskList.innerHTML = '';
            const filteredTasks = tasks.filter(task => {
                if (filter === 'completed') return task.isCompleted;
                if (filter === 'incomplete') return !task.isCompleted;
                return true; // 'all'
            });

            filteredTasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task.text;
                li.className = task.isCompleted ? 'completed' : '';
                li.addEventListener('click', () => {
                    task.isCompleted = !task.isCompleted;
                    renderTasks(filter);
                });
                taskList.appendChild(li);
            });
        }

        addTaskButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                tasks.push({ text: taskText, isCompleted: false });
                taskInput.value = '';
                renderTasks('all');
            }
        });

        showAllButton.addEventListener('click', () => renderTasks('all'));
        showCompletedButton.addEventListener('click', () => renderTasks('completed'));
        showIncompleteButton.addEventListener('click', () => renderTasks('incomplete'));