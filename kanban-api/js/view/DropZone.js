import KanbanAPI from "../view/kanbanAPI.js";

export default class DropZone {
    static createDropZone(columnId) {
        const dropZone = document.createElement("div");
        dropZone.classList.add("kanban__dropzone");

        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZone.classList.add("kanban__dropzone--active");
        });

        dropZone.addEventListener("dragleave", () => {
            dropZone.classList.remove("kanban__dropzone--active");
        });

        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            const itemId = e.dataTransfer.getData("text/plain");
            KanbanAPI.updateItem(Number(itemId), { columnId });
            dropZone.classList.remove("kanban__dropzone--active");
        });

        return dropZone;
    }
}
