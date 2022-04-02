import { GET_ALL_TASK_PRIORITY_NORMAL, GET_ALL_USER_MODAL_NORMAL, GET_TASK_TYPE_NORMAL } from "../constants/Cyberbugs/Cyberbugs"

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    listType:[],
    listPriority:[],
    listMembers:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_TYPE_NORMAL:{
        return {...state,listType:action.data}
    }

    case GET_ALL_TASK_PRIORITY_NORMAL:{
        return {...state,listPriority:action.data}
    }
    case GET_ALL_USER_MODAL_NORMAL:{
        return {...state,listMembers:action.data}
    }
    

  default: return { ...state }
  }
}
