import { addTask as apiAddTask, loadTasks } from './api/kanbanapi.js';

async function addTask(columnId) {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (!taskText) return; // Prevent adding empty tasks

    // Call API to add task
    await apiAddTask(columnId, taskText);
    
    const column = new Column(columnId);
    column.addTask(taskText);
    taskInput.value = ''; // Clear input field
}

// Load existing tasks on initialization
loadTasks();
