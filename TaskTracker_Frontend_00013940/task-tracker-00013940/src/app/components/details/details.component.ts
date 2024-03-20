import { Component, inject } from '@angular/core';
import { TasksModel } from '../../Tasks';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskTracker00013940Service } from '../../task-tracker-00013940.service';
import { MatChipsModule } from '@angular/material/chips'
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule,MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  
  task: TasksModel = {
    id: 0,
    Title: "string",
    Description: "string",
    StatusId: 0,
    Status: {
      Id: 0,
      Status: "string"
    }
  }

  serviceTaskTracker = inject(TaskTracker00013940Service)

  activatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    console.log('Task ID:', this.activatedRoute.snapshot.params["Id"]);
      this.serviceTaskTracker.getById(this.activatedRoute.snapshot.params["Id"]).subscribe(result => {
      this.task = result;
      
      
    });
  }
}
