import { Task } from "../models/Task";
import { generateId } from "../utils/idGenerator";
import { loadTasks, saveTasks } from "../utils/storage";

export class TaskMangaer {
    private tasks: Record<number, Task> = {};

    constructor() {
        loadTasks().then(tasks => {
            this.tasks = tasks;
        })
    }

    addTask(title: string, description?: string): void {
        const id = generateId();
        this.tasks[id] = {
            id,
            title,
            description,
            done: false,
            createdAt: new Date(),
        };
    }

    listTasks(): Task[] {
        return Object.values(this.tasks);
    }



}