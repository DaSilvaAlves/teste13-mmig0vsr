interface Task {
  id: number;
  text: string;
  done: boolean;
  priority: string;
}

interface TaskList {
  tasks: Task[];
}

interface Error {
  message: string;
}