import { call, put, takeLatest } from "redux-saga/effects"
import { ADD_PROJECT, FETCH_DATA_CATEGORY, GET_CATEGORY } from "../../constants/Cyberbugs/Cyberbugs"
// import  CyberBugService from "../../../services/CyberBugService/"
import { cyberlearnService } from "../../../services/CyberBugService"
import { STATUS_CODE } from "../../../util/constants/settingSystem"
import { history } from "../../../util/libs/history"

function * getCategoryAction  (action){
    // console.log(133)

    try{
        let {status,data}=yield call(()=>{return cyberlearnService.getAllProjectCategory()  })
        // console.log(data)

        if(status===STATUS_CODE.SUCCESS){
            // console.log(data.content,data.dateTime)
            yield put ({
                type:FETCH_DATA_CATEGORY,
                array:data.content
            })
        }
    }
    catch(err){
        console.log(err)
    }
}

function* addProjectAction (action){
    console.log(action.data)

    try{
        let {data,status}= yield call(()=>{return cyberlearnService.createProjectAuthorize(action.data)})
        if(status===STATUS_CODE.SUCCESS){
            console.log(data)
            history.push('/management')
        }
    }
    catch (err){
        console.log(err.response.data)
    }
}

 export function * theoDoigetCategoryAction  (){
    yield takeLatest (GET_CATEGORY,getCategoryAction)
}

export function* theoDoiActionAddProject (){
    yield takeLatest(ADD_PROJECT,addProjectAction)
}