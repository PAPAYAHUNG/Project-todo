import { Action } from "history"

const stateDefault = {
    needToShow :true
}

const checkWhomNeedToShowReducer = (state = stateDefault,action)=>{
    switch(action.type){
        case "CHECK_WHOM":{
            if(action.name === '/login' || action.name === '/DemoHOCmodal' ){
                state.needToShow=false
                return{...state}
            }
            else{
                state.needToShow=true
                return{...state}

            }
        }

        default: return {...state}
    }
}
export default checkWhomNeedToShowReducer