import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskTitle: string = '';
  taskDescription: string = '';
  addTask(title: string, description: string) {

    let task: Task = {
      id: Number(Math.floor(Math.random() * 100)),
      title: title,
      description: description
    }

    let tasks = JSON.parse(localStorage.getItem('tasks')!);

    if (!tasks) {
      tasks = [];
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    this.taskTitle = '';
    this.taskDescription = '';
  }
}
