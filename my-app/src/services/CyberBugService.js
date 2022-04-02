import axios from "axios";
import { DOMAIN_CYBERBUG, TOKEN } from "../util/constants/settingSystem";



class CyberBugService {
    
    constructor (){
    }
    signinApi = (userLogin)=>{
        return axios.post(`${DOMAIN_CYBERBUG}/Users/signin`,userLogin)
    }
    //Get all project category
    getAllProjectCategory = ()=>{
        return axios.get(`${DOMAIN_CYBERBUG}/ProjectCategory`)
    }
    //Create new project
    createProject = (data)=>{
        return axios.post(`${DOMAIN_CYBERBUG}/Project/createProject`,data)
    }
    //Create new project with authorize
    createProjectAuthorize = (data)=>{
        let header= {'Authorization': 'Bearer '+ localStorage.getItem(TOKEN)}
        console.log(header)
        return axios.post(`${DOMAIN_CYBERBUG}/Project/createProject`,data,header)
    }
    //Get project management 
    getAllProjectManagement = ()=>{
         const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
         console.log(Author)
        return axios.get(`${DOMAIN_CYBERBUG}/Project/getAllProject`,{headers:{'Authorization':Author}})
    }
    //Send upadate project to server
    sendUpdateProject = (values)=>{
        console.log(values)
        const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
        console.log(Author)
        return axios.put(`${DOMAIN_CYBERBUG}/Project/updateProject?projectId=${values.id}`,values,{headers:{'Authorization':Author}})
    }
    //DeleteProject
    DeleteProject = (id)=>{
        
        const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
        console.log(Author)
        return axios.delete(`${DOMAIN_CYBERBUG}/Project/deleteProject?projectId=${id}`,{headers:{'Authorization':Author}})
    }
    //Search auto complete for user
    getSearchAutoCompleteUser = (valueSearch)=>{
        const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
       return axios.get(`${DOMAIN_CYBERBUG}/Users/getUser?keyword=${valueSearch}`,{headers:{'Authorization':Author}})
   }
   
   //assign member to Project
   postAssignMemberToProject = (user)=>{
    const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
    // console.log(Author)
    return axios.post(`${DOMAIN_CYBERBUG}/Project/assignUserProject`,user,{headers:{'Authorization':Author}})
   }
   getProjectDeatail = (id)=>{
    const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
    console.log(Author)
    return axios.get(`${DOMAIN_CYBERBUG}/Project/getProjectDetail?id=${id}`,{headers:{'Authorization':Author}})
   }

   getAllProjectForModal =()=>{
    const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
    console.log(Author)
    return axios.get(`${DOMAIN_CYBERBUG}/Project/getAllProject`,{headers:{'Authorization':Author}})
   }
   getAllTaskType =()=>{
    const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
    return axios.get(`${DOMAIN_CYBERBUG}/TaskType/getAll`,{headers:{'Authorization':Author}})
   }
   getAllPriority =()=>{
    const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
    return axios.get(`${DOMAIN_CYBERBUG}/Priority/getAll`,{headers:{'Authorization':Author}})
   }
   
   getAllUsersForModal =()=>{
    const Author= 'Bearer '.concat(localStorage.getItem(TOKEN))
    return axios.get(`${DOMAIN_CYBERBUG}/Users/getUser`,{headers:{'Authorization':Author}})
   }
   


}


export const cyberlearnService = new CyberBugService()

//Hoac ghi  export const CyberBugService = {
    //signinApi = (userLogin)=>{
       // return axios.post(`${DOMAIN_CYBERBUG}/Users/signin`,userLogin)
   // }
