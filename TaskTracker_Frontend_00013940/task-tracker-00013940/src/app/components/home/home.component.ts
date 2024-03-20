import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TasksModel } from '../../Tasks';
import { MatButtonModule } from '@angular/material/button'
import { TaskTracker00013940Service } from '../../task-tracker-00013940.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  TaskTrackerService = inject(TaskTracker00013940Service)
  tasks: TasksModel[] = [];
  ngOnInit() {
    this.TaskTrackerService.getAll().subscribe((result) => {
      this.tasks = result
      console.log(result)
    })
  }
  displayedColumns: string[] = ['Id', 'Title', 'Description', 'Status', 'Actions'];

  
  e(Id: number) {
    console.log("Edit", Id)
    this.router.navigateByUrl("edit/"+ Id)
  };
  d(Id: number) {
    console.log("Details", Id)
    this.router.navigateByUrl("details/"+ Id)
  };
  dl(Id: number) {
    console.log("Delete", Id)
    this.router.navigateByUrl("delete/"+ Id)
  };

}
