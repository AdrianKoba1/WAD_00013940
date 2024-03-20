import { Component,inject } from '@angular/core';
import { TasksModel } from '../../Tasks';
import { TaskTracker00013940Service } from '../../task-tracker-00013940.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteTask:TasksModel={
    id:0,
    title:"",
    description:"",
    statusId:0,
    status:{
      id:0,
      taskStatus:""    
    }
  
  }
  service = inject(TaskTracker00013940Service)
  activatedRoute= inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit() {
    this.service.getById(this.activatedRoute.snapshot.params["id"]).subscribe((result) => {
      this.deleteTask = result;
    });
  }
  
  onHomeButtonClick() {
    this.router.navigateByUrl("home");
  }

  onDeleteButtonClick(id: number) {
    console.log(this.deleteTask.id);
    this.service.delete(this.deleteTask.id).subscribe(() => {
      alert("Deleted item with ID: " + id);
      this.router.navigateByUrl("home");
    });
  }
}
