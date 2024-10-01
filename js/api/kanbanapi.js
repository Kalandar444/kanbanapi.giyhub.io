const apiUrl = 'https://api.example.com/kanban'; // Placeholder URL

let tasks = {
    todo: [],
    inProgress: [],
    done: []
};

// Simulate fetching tasks from an API
function fetchTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 1000);
    });
}

// Simulate adding a task to the API
function addTask(columnId, taskText) {
    return new Promise((resolve) => {
        setTimeout(() => {
            tasks[columnId].push(taskText);
            resolve();
        }, 500);
    });
}

// Function to get tasks for each column
async function loadTasks() {
    const loadedTasks = await fetchTasks();
    for (const [columnId, taskList] of Object.entries(loadedTasks)) {
        const column = new Column(columnId);
        taskList.forEach(taskText => column.addTask(taskText));
    }
}

// Export API functions
export { addTask, loadTasks };
