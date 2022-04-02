/* eslint-disable import/no-anonymous-default-export */
import React from "react"
const initialState = {
    visible:false,
    ComponentDrawer: <p>Helllooooo</p>,
    callbackSubmit: (propsValue)=>(alert('success'))

}

export default (state = initialState,action) => {
  switch (action.type) {
    case 'OPEN_DRAWER':{
        console.log("xxx")
        return {...state,visible:true}
    }
    case 'CLOSE_DRAWER':{ 
        return {...state,visible:false}
    }
    case 'OPEN_EDIT_DRAWER':{
        return {...state,visible:true,
            ComponentDrawer:action.Component
        }
    }

    case 'SET_SUBMIT_EDIT_PROJECT':{
        return{...state,callbackSubmit:action.submitFunction}
    }
  default:return {...state}
   
  }
}
