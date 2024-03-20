import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TasksModel } from './Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskTracker00013940Service {
  httpClient = inject(HttpClient)
  constructor() { }

  getAll(){return this.httpClient.get<TasksModel[]>("https://localhost:7200/api/Tasks/GetTasks" )}

  getById(id:number){
    return this.httpClient.get<TasksModel>(`https://localhost:7200/api/Tasks/GetTasks/${id}`);
    
  };
  

  getAllStatuses(){return this.httpClient.get("https://localhost:7200/api/Status/GetStatuses/")}

  createTask(task: TasksModel){return this.httpClient.post("https://localhost:7200/api/Tasks/PostTasks", task)}

  edit(task: TasksModel){return this.httpClient.put("https://localhost:7200/api/Tasks/PutTasks", task)}

  delete(id:number){
    return this.httpClient.delete(`https://localhost:7200/api/Tasks/DeleteTasks/${id}`);
  };
}
