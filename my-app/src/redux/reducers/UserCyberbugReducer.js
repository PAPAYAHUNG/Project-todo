import { useNavigate } from "react-router"
import { USER_LOGIN } from "../../util/constants/settingSystem"
import { USLOGIN_ACTION } from "../constants/Cyberbugs/Cyberbugs"

/* eslint-disable import/no-anonymous-default-export */
let usLogin = {}

if (localStorage.getItem(USER_LOGIN)){
    usLogin=JSON.parse(localStorage.getItem(USER_LOGIN))
}


const initialState = {
    userLogin : usLogin
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USLOGIN_ACTION:{
        state.userLogin= action.userLogin
        let navigate =useNavigate()
        navigate('/')
        return {...state}
    }

    

  default: return { ...state}
    
  }
}
