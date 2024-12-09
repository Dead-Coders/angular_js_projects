# TaskManager Application

    This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Table of Contents

    1. Introduction
    2. Features
    3. Technologies used
    4. Development server
    5. Running unit tests
    6. Usage
    7. Documentation

## Introduction 
    This project is a Task Manager application built with Angular v17.
    The application allows the user to login/logout (mocked service), see their tasks, add new tasks, edit existing tasks and mark them as done.

## Features
    - Mocked Login/Logout
    - Task List
    - Add Task
    - Edit Task
    - Mark Task as Done

## Technologies used
    - Angular v17.1.1
    - Angular Material UI v17.1.1
    - localStorage

## Development server

    Run `npm install` to intall dependencies. 
    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

    Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Usage

    - Login view (/login)
        The user can log in using any email/passowrd combination since it is just a mocked service, but form validation is still present.
    ![Empty login view](https://github.com/jspvg/task-manager-angular/blob/main/images/image1.png)
    ![Login view form validation with errors](https://github.com/jspvg/task-manager-angular/blob/main/images/image2.png)
    ![View password option](https://github.com/jspvg/task-manager-angular/blob/main/images/image3.png)

    -Add Task (/add-task)
        The user can add a new task which will appear in the task list view and clear the form after they press the 'ADD TASK' button. 
        The task gets added to it's localStorage object, if there is no object, it gets created first and then the task is added.
    ![Empty add task view](https://github.com/jspvg/task-manager-angular/blob/main/images/image4.png)

    -Task List (/)
        The user can view all their tasks on this view and edit them/mark them as done. 
        When marked as done, the task gets deleted from it's object in localStorage.
        The user can swith between the tabs 'task list' and 'add tasks' as well as logout by clicking the logout button which deleted the user from localStorage.
    ![Task list view with one task](https://github.com/jspvg/task-manager-angular/blob/main/images/image5.png)
    ![Task list view with multiple tasks](https://github.com/jspvg/task-manager-angular/blob/main/images/image6.png)

    -Edit Task (/edit-task/:id)
        The user can edit one of their tasks by clicking the 'EDIT TASK' button.
        The view loads the tasks' title and description, which the user can modify and by clicking 'CONFIRM EDIT', the item gets updated in localStorage and redirects the user to the Task List view.
    ![Edit task view for one task](https://github.com/jspvg/task-manager-angular/blob/main/images/image7.png)
    ![Task List view with edited task](https://github.com/jspvg/task-manager-angular/blob/main/images/image8.png)


## Documentation

    While making this project I have used the following resources:
    1. [angular.dev](https://angular.dev/)
        Specifically these materials:
        - [tutorial to get to know angular](https://angular.dev/tutorials/first-app)
        - [routing reference](https://angular.dev/guide/routing)
        - [ngModule for forms](https://angular.dev/guide/ngmodules)
        - [dependency injection for injectable services](https://angular.dev/guide/di)
        - [guards for route protection](https://angular.dev/guide/routing/common-router-tasks#preventing-unauthorized-access)
    2. [angular material](https://material.angular.io/)
        For component styling
