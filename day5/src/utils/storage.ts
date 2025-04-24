import fs from 'fs-extra';
import { Task } from '../models/Task';

const FILE_PATH = 'tasks.json';

export const saveTasks = async (tasks: Task[]) => {
    await fs.writeJSON(FILE_PATH, tasks, {spaces: 2});
}

export const loadTasks = async (): Promise<Task[]> => {
   if(await fs.pathExists(FILE_PATH)) {
        return await fs.readJSON(FILE_PATH);
    }
    return [];
}



