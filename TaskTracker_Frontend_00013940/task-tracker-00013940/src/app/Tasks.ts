export interface TasksModel{
    id: number,
    Title: string,
    Description: string,
    StatusId: number,
    Status:{
        Id: number,
        Status: string
    }
}