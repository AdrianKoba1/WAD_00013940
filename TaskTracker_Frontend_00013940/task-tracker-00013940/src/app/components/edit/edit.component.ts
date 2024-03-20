import { Component, OnInit, inject } from '@angular/core';
import { TaskTracker00013940Service } from '../../task-tracker-00013940.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksModel } from '../../Tasks';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

function findIndexById(jsonArray: any[], indexToFind: number): number{
  return jsonArray.findIndex((task) => task.Id == indexToFind)
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatSelectModule,MatInput, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
    taskService = inject(TaskTracker00013940Service);
    activatedRoute = inject(ActivatedRoute)
    router = inject(Router)

    editTask: TasksModel={
      id: 0,
      title: "string",
      description: "string",
      statusId: 0,
      status:{
        id: 0,
        taskStatus: "string"
    }
    };

    statusObject: any;
    selected: any
    cId: number = 0;

    ngOnInit() {
        this.taskService.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
          this.editTask = result;
          this.selected = this.editTask.statusId;
        });

        this.taskService.getAllStatuses().subscribe((result) => {
          this.statusObject = result;
        });
    }

    toHome(){
      this.router.navigateByUrl("home")
    }

    edit(){
      this.editTask.statusId = this.cId;
      this.editTask.status = this.statusObject[findIndexById(this.statusObject, this.cId)];
      this.taskService.edit(this.editTask).subscribe(result => {
        alert("Changes has been saved")
        this.router.navigateByUrl("home");
      })
    }
    


}
