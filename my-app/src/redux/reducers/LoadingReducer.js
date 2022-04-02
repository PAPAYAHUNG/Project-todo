import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst"

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    isLoading:false
}

export default (state = initialState, action) => {
  switch (action.type) {

  case DISPLAY_LOADING :{
      console.log(state.isLoading)
      state.isLoading = true
      return{...state}
  }

  case HIDE_LOADING:{
    console.log(state.isLoading)
      state.isLoading = false
      return{...state}

  }

  default:return {...state}
  }
}
