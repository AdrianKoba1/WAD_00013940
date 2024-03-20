import { Component, inject } from '@angular/core';
import { TaskTracker00013940Service } from '../../task-tracker-00013940.service';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  serviceTaskTracker = inject(TaskTracker00013940Service)
  router = inject(Router)
  statuses:any

  taskToCreate: any = {
    title: "",
    description: "",
    statusId: 0
  }

  selectedStatusId : number= 0

  ngOnInit(){
    this.serviceTaskTracker.getAllStatuses().subscribe(result=>{
      this.statuses = result
      console.log(this.statuses)
    });
  }

  onCreateBtn(){
    this.taskToCreate.statusId = this.selectedStatusId
    this.serviceTaskTracker.createTask(this.taskToCreate).subscribe(result => {
      alert("Created")
      this.router.navigateByUrl("home")
    })
  }
}
