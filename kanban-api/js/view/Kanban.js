import Column from "./Column.js";
import KanbanAPI from "js/api/KanbanAPI.js";

export default class Kanban {
    constructor(root) {
        this.root = root;
        this.init();
    }

    init() {
        KanbanAPI.read().forEach(column => {
            const columnView = new Column(column.id, column.title);
            this.root.appendChild(columnView.elements.root);
        });
    }
}
