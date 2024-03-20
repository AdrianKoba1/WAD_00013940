export interface TasksModel{
    id: number,
    title: string,
    description: string,
    statusId: number,
    status:{
        id: number,
        taskStatus: string
    }
}