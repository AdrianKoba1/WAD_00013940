import { Component, inject } from '@angular/core';
import { TasksModel } from '../../Tasks';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskTracker00013940Service } from '../../task-tracker-00013940.service';
import { MatChipsModule } from '@angular/material/chips'
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule,MatCardModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  
  task: TasksModel = {
    id: 0,
    title: "string",
    description: "string",
    statusId: 0,
    status: {
      id: 0,
      taskStatus: "string"
    }
  }

  serviceTaskTracker = inject(TaskTracker00013940Service)

  activatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    console.log('ID from route parameters:', this.activatedRoute.snapshot.params['id']);

    this.serviceTaskTracker.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.task = result;
      console.log('Task data:', this.task);
    
      
      
    });
  }
}
