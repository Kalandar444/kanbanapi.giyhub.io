import KanbanAPI from ".js/api/KanbanAPI.js";

export default class Item {
    constructor(id, content) {
        this.elements = {};
        this.elements.root = this.createRoot();
        this.elements.input = this.elements.root.querySelector(".kanban__item-input");
        this.elements.root.dataset.id = id;
        this.elements.input.textContent = content;

        this.elements.input.addEventListener("blur", () => {
            const newContent = this.elements.input.textContent.trim();
            if (newContent) {
                KanbanAPI.updateItem(id, { content: newContent });
            }
        });

        this.elements.root.addEventListener("dblclick", () => {
            if (confirm("Are you sure you want to delete this item?")) {
                KanbanAPI.deleteItem(id);
                this.elements.root.remove();
            }
        });
    }

    createRoot() {
        const range = document.createRange();
        range.selectNode(document.body);
        return range.createContextualFragment(`
            <div class="kanban__item" draggable="true">
                <div class="kanban__item-input" contenteditable>${this.content}</div>
            </div>
        `).children[0];
    }
}
