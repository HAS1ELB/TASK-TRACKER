import { Component } from '@angular/core';

@Component({
  standalone: true, // Ajout de cette option
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: { id: number; title: string; completed: boolean }[] = [];

  addTask(title: string): void {
    const newTask = { id: Date.now(), title, completed: false };
    this.tasks.push(newTask);
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
