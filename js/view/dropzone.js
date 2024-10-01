function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.innerText);
    event.target.classList.add('dragging');
}

function dragEnd(event) {
    event.target.classList.remove('dragging');
}

document.querySelectorAll('.task-list').forEach(taskList => {
    taskList.addEventListener('dragover', dragOver);
    taskList.addEventListener('drop', drop);
});

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const taskText = event.dataTransfer.getData('text/plain');
    const columnId = event.target.closest('.column').id;

    if (taskText) {
        const column = new Column(columnId);
        column.addTask(taskText);
    }
}
