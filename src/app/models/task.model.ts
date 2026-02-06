export class Task {
  id?: number;
  title: string;
  description?: any;
  status: string;

  constructor(task: Task) {
    this.id = task.id || 0;
    this.title = task.title;
    this.description = task.description || undefined;
    this.status = task.status;
  }
}
