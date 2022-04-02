import axios from "axios"
import { DOMAIN } from "../util/constants/settingSystem"

export class TodoListService {
    constructor() {
    }
    getTaskApii = ()=>{
        return  axios.get(`${DOMAIN}/ToDoList/GetAllTask`)
    }
    addTaskApi = (task)=>{
        return axios.post(`${DOMAIN}/ToDoList/AddTask`,task)
    }
    deleteTaskApi = (task)=>{
        return axios.delete(`${DOMAIN}/ToDoList/deleteTask?taskName=${task}`)
    }
    checkCompleteTaskApi = (task)=>{
        return axios.put(`${DOMAIN}/ToDoList/doneTask?taskName=${task}`)
    }
    rejectTaskApi = (task)=>{
        return axios.put(`${DOMAIN}/ToDoList/rejectTask?taskName=${task}`)
    }
}



export const toDoListService = new TodoListService()
