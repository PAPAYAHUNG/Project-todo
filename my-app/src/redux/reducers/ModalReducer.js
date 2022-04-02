/* eslint-disable import/no-anonymous-default-export */
import React from "react"
const initialState = {
    component:<p>Noi dung mac dinh</p>
}

export default (state = initialState, action) => {
  switch (action.type) {
        case 'OPEN_FORM':{
            state.component=action.component
            return{...state}
        }
 

  default: return {...state}
  }
}
