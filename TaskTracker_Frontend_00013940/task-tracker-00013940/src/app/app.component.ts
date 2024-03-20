import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksModel } from './Tasks';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule } from '@angular/material/button'
import { HomeComponent } from './components/home/home.component';
import { HttpClient } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatButtonModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // title = 'Whatever';

  // tasks: TasksModel [] = [{
  //   Id: 1,
  //   Title: "Plants",
  //   Description: "Water the plants",
  //   StatusId: 1,
  //   Status:{
  //       Id: 1,
  //       Status: "Complete"
  //   }
  // },

  // {
  //   Id: 2,
  //   Title: "Reading",
  //   Description: "Read a book",
  //   StatusId: 2,
  //   Status:{
  //       Id: 2,
  //       Status: "In process"
  //   }
  // },

  // {
  //   Id: 3,
  //   Title: "Learn",
  //   Description: "Learn Java",
  //   StatusId: 3,
  //   Status:{
  //       Id: 3,
  //       Status: "In process"
  //   }
  // },

  // {
  //   Id: 4,
  //   Title: "Walk",
  //   Description: "Walk 10 mile",
  //   StatusId: 4,
  //   Status:{
  //       Id: 4,
  //       Status: "Not started"
  //   }
  // },

  // {
  //   Id: 5,
  //   Title: "Workout",
  //   Description: "Go to gym",
  //   StatusId: 5,
  //   Status:{
  //       Id: 5,
  //       Status: "Complete"
  //   }
  // },

  // {
  //   Id: 6,
  //   Title: "Entertainment",
  //   Description: "Watch a film",
  //   StatusId: 6,
  //   Status:{
  //       Id: 6,
  //       Status: "Not started"
  //   }
  // }

//]

  
}


