import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: TaskListComponent,
        title: 'Tasks',
        canActivate: [authGuard]
    },
    {
        path: 'add-task',
        component: AddTaskComponent,
        title: 'Add Tasks',
        canActivate: [authGuard]
    },
    {
        path: 'edit-task/:id',
        component: EditTaskComponent,
        title: 'Edit task',
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
