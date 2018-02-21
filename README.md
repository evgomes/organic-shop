# Organic Shop

This is a simple e-commerce application built with Angular, Firebase and Bootstrap 4, as the final project for the course ["The Complete Angular Master Class"](https://codewithmosh.teachable.com/p/angular-master-class/), created by Mosh Hamedani. The intent of the project is to show how a real world Angular application is.

This version was adapted to Angular 5 in order to handle version mismatches, and it contains new components and customizations.

## Features

This is an Angular project with:

- [Firebase Realtime Database](https://firebase.google.com/products/database/) (implemented with [angularfire2](https://github.com/angular/angularfire2))
- [Bootsrap 4](https://getbootstrap.com/) (implemented with [NG Bootstrap](https://ng-bootstrap.github.io/))
- [Font Awesome](https://fontawesome.com/)
- [Angular 5 data table](https://github.com/ggmod/angular-5-data-table)
- [RxJS](http://reactivex.io/)

## Configuration

Make sure to create a Firebase project and to change the environment settings in /src/environments with your own project configuration data, in order to run this project. You can use [Firebase tools](https://github.com/firebase/firebase-tools) to init and deploy the application.

After creating the Firebase project, import the file "oshop-database.json" that is in the root folder of the application to populate the database with initial data.

## Running the application

After creating the Firebase project and configuring the application with your custom settings, run `ng serve` to start a development server. Navigate to `localhost:4200` to see the app running.