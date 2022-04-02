import axios from "axios";
import { GET_TASK_API } from "../constants/ToDoListConstant";

export const getTaskApi  = () => {
  return async dispatch =>{
    try{
      let { data, status } = await axios.get('http://svcy.myclass.vn/api/ToDoList/GetAllTask')
    console.log(data)
    if (status === 200) {
      dispatch({
        type: GET_TASK_API,
        api: data
      })
    }
    }catch(err){
      console.log(err.response.data)
    }
    // .then((res) => {
    //       console.log(res)
    //       // setState({
    //       //   ...state,
    //       //   taskList: res.data
    //       // })
    //       dispatch({
    //         type: GET_TASK_API, 
    //         api:res.data
    //       })
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    }
}

export const handleSubmitApi = (task)=>{
  return async dispatch =>{
    try{
      let {data,status} = await axios.post('http://svcy.myclass.vn/api/ToDoList/AddTask', task)
      if(status===200){
        dispatch(getTaskApi())
      }
    }catch(err){
      console.log(err)
    }
  }
}

export const deleteTaskApi = (task)=>{
  return dispatch =>{
    axios.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${task}`)
      .then((res) => {
        dispatch(getTaskApi())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const rejectTaskApi = (task)=>{
    return dispatch =>{
      axios.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${task}`)
      .then((res) => {
        dispatch(getTaskApi())

      })
      .catch((err) => {
        console.log(err)
      })
    }
}

