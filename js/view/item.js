class Item {
    constructor(text) {
        this.text = text;
        this.element = this.createElement();
    }

    createElement() {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.textContent = this.text;

        taskElement.setAttribute('draggable', true);
        taskElement.addEventListener('dragstart', dragStart);
        taskElement.addEventListener('dragend', dragEnd);

        return taskElement;
    }
}
