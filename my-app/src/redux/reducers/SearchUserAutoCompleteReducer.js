import { SEARCH_AUTO_COMPLETE_NORMAL } from "../constants/Cyberbugs/Cyberbugs"

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    listSearch:[]
}

export default (state = initialState,action) => {
  switch (action.type) {
    case SEARCH_AUTO_COMPLETE_NORMAL:{
        return {...state,listSearch:action.listSearch}
    }
  
    

  default: return { ...state}
  }
}
