class Column {
    constructor(id) {
        this.id = id;
        this.taskList = document.querySelector(`#${id} .task-list`);
    }

    addTask(taskText) {
        const task = new Item(taskText);
        this.taskList.appendChild(task.element);
    }
}
