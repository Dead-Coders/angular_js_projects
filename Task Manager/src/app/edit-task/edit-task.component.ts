import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {
  taskId: number = -1;
  taskTitle: string = '';
  taskDescription: string = '';
  tasks: Task[] = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));

    let task = this.tasks.find(task => task.id === this.taskId);

    if (task) {
      this.taskTitle = task.title;
      this.taskDescription = task.description;
    }

  }

  editTask() {
    let task = this.tasks.find(task => task.id === this.taskId);

    if (task) {
      task.title = this.taskTitle;
      task.description = this.taskDescription;
    }

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.router.navigate(['/']);

  }

}
