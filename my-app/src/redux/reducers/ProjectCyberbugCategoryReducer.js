import { FETCH_DATA_CATEGORY, GET_ALL_PROJECT_MODAL_NORMAL } from "../constants/Cyberbugs/Cyberbugs"

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    arrProjectCategory : [],
    arrProjectForModal:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
   case FETCH_DATA_CATEGORY:{
    //    console.log(12443)
       state.arrProjectCategory=action.array
       return {...state}
   }
  case GET_ALL_PROJECT_MODAL_NORMAL:{
      return{...state,arrProjectForModal:action.data}
  }

  default: return { ...state }
   
  }
}
