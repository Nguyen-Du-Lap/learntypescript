import inquirer from "inquirer";
import { TaskMangaer } from "./managers/TaskManager";

const taskManager = new TaskMangaer();

async function mainMenu() {
  const { action } = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "Bạn muốn làm gì?",
    choices: ["📋 Xem task", "➕ Thêm task", "✅ Hoàn thành task", "🗑️ Xóa task", "❌ Thoát"],
  });

  switch (action) {
    case "📋 Xem task":
      console.table(taskManager.listTasks());
      break;
    case "➕ Thêm task":
      const { title, description } = await inquirer.prompt([
        { name: "title", message: "Tên task:" },
        { name: "description", message: "Mô tả (tùy chọn):" },
      ]);
      taskManager.addTask(title, description);
      break;
    case "✅ Hoàn thành task":
      const { id: doneId } = await inquirer.prompt({ name: "id", message: "ID task:" });
      taskManager.markDone(Number(doneId));
      break;
    case "🗑️ Xóa task":
      const { id: deleteId } = await inquirer.prompt({ name: "id", message: "ID task:" });
      taskManager.removeTask(Number(deleteId));
      break;
    case "❌ Thoát":
      process.exit();
  }

  await mainMenu();
}

mainMenu();
