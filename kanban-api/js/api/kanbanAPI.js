class KanbanAPI {
    static read() {
        const json = localStorage.getItem("kanban-data");
        if (!json) {
            const initialData = [
                {
                    id: 1,
                    title: "Not Started",
                    items: []
                },
                {
                    id: 2,
                    title: "In Progress",
                    items: []
                },
                {
                    id: 3,
                    title: "Completed",
                    items: []
                },
            ];
            KanbanAPI.save(initialData);
            return initialData;
        }
        return JSON.parse(json);
    }

    static save(data) {
        localStorage.setItem("kanban-data", JSON.stringify(data));
    }

    static getItems(columnId) {
        const column = KanbanAPI.read().find(column => column.id === columnId);
        return column ? column.items : [];
    }

    static insertItem(columnId, content) {
        const data = KanbanAPI.read();
        const column = data.find(column => column.id === columnId);
        const item = {
            id: Math.floor(Math.random() * 100000),
            content
        };
        if (column) {
            column.items.push(item);
            KanbanAPI.save(data);
        }
        return item;
    }

    static updateItem(itemId, newProps) {
        const data = KanbanAPI.read();
        const [item, currentColumn] = (() => {
            for (const column of data) {
                const item = column.items.find(item => item.id === itemId);
                if (item) {
                    return [item, column];
                }
            }
        })();

        if (!item) {
            throw new Error("Item not found.");
        }

        item.content = newProps.content === undefined ? item.content : newProps.content;

        if (newProps.columnId !== undefined) {
            const targetColumn = data.find(column => column.id === newProps.columnId);
            if (!targetColumn) {
                throw new Error("Target column not found.");
            }

            currentColumn.items.splice(currentColumn.items.indexOf(item), 1);
            targetColumn.items.push(item);
        }

        KanbanAPI.save(data);
    }

    static deleteItem(itemId) {
        const data = KanbanAPI.read();
        for (const column of data) {
            const itemIndex = column.items.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                column.items.splice(itemIndex, 1);
                break;
            }
        }
        KanbanAPI.save(data);
    }
}

export default KanbanAPI;
