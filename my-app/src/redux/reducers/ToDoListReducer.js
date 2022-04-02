/* eslint-disable import/no-anonymous-default-export */
import { GET_TASK_API } from "../constants/ToDoListConstant"

const initialState = {
    taskList:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case GET_TASK_API:{
        console.log(action.api)
        state.taskList=action.api
        return{...state}
      }
      break


    default:return {...state}
  }
}
