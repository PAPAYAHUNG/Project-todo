//Có hai loại action
//Loại 1: action =>object (action thường)
//loại 2 :action =>function (thường dùng đẻ xử lý api hoặc gọi các action khác)
import axios from 'axios'
import { fork, take, takeEvery, takeLatest, call, put, delay } from 'redux-saga/effects'
import { toDoListService } from '../../services/ToDoListService'
import { STATUS_CODE } from '../../util/constants/settingSystem'
import { DISPLAY_LOADING, HIDE_LOADING } from '../constants/LoadingConst'
import { ADD_TASK_API, CHECK_TASK_API, DELETE_TASK_API, GET_TASKLIST_API, GET_TASK_API, REJECT_TASK_API } from '../constants/ToDoListConstant'

// while(true){
//     yield take ('getTaskApi') //theo doi action xem action nao dispatch moi lam cac cong viec ben duoi
//         console.log('abf')
//     //call api dispatch len reducer...
// }

/*
TODAY hung kun add task getTaskAPI
Action lay danh sach task tu API
*/

function* getTaskApiAction(action) {
    //put giong dispatch action
    yield put({
        type: DISPLAY_LOADING,

    })
    try {
        yield delay(200)
        let { data, status } = yield call(toDoListService.getTaskApii)
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API,
                api: data
            })
        } else {
            console.log('err')
        }
    }
    catch (err) {
        console.log(err)
    }
    yield put({
        type: HIDE_LOADING

    })
}

export function* theoDoiActionGetTaskApi() {
    // yield takeEvery ('getTaskApi',getTaskApi) // se xay ra van de neu dispatch gia tri tra ve sau, co the sai du lieu
    yield takeLatest(GET_TASKLIST_API, getTaskApiAction)  // CHI DE LANG NGHE LAN CUOI ACTION DISPATCH
}

// TODAY hung kun add task getTaskAPI
// Action lay danh sach task tu API
function* addTaskAPIaction (action){
    console.log(action)
    //goi api
    //Hien thi loading
    //Thanh cong thi load lai task bang cach goi lai action saga load tasklist
    try{
      const {data,status}=  yield call(()=>{return toDoListService.addTaskApi(action.task)})
      if(status=== STATUS_CODE.SUCCESS){
          yield put({
            type:GET_TASKLIST_API
         
          })
      }
    }
    catch (err){
        console.log(err)
    }

}

export function* theoDoiActionAddTaskApi (){
    yield takeLatest(ADD_TASK_API,addTaskAPIaction)
}


//23/03/2022 hung kun viet chuc nang delete task
//Action lay danh sach task tu API

function * deleteTask (action){
    console.log(action.task)

    try {
        let {data,status} =yield call(()=>{return toDoListService.deleteTaskApi(action.task)})
        if(status===STATUS_CODE.SUCCESS){
            console.log(data)
            yield put({
                type:GET_TASKLIST_API
            })
        }
    }
    catch (err){
        console.log(err)
    }
}

export function* theoDoiActionDeleteTaskApi (){
    yield takeLatest(DELETE_TASK_API,deleteTask )
}

//23/03/2022 hung kun viet chuc nang check complete task
//Action lay danh sach task tu API
function* checkTaskAPI (action){
    try{
        let {data,status}= yield call(()=>{
            return toDoListService.checkCompleteTaskApi(action.task)
        })
        if(status===STATUS_CODE.SUCCESS){
            yield put({
                type:GET_TASKLIST_API
            })
        }
    }
    catch(err){
        console.log(err)
    }
}

export function* theoDoiActionCheckCompleteTaskApi (){
    yield takeLatest(CHECK_TASK_API,checkTaskAPI)
}

//23/03/2022 hung kun viet chuc nang reject task
//Action lay danh sach task tu API
function* rejectTask (action){
    try{
        let {data,status}= yield call(()=>{
            return toDoListService.rejectTaskApi(action.task)
        })
        if(status===STATUS_CODE.SUCCESS){
            yield put({
                type:GET_TASKLIST_API
            })
        }
    }
    catch (err){
        console.log(err)
    }
}


export function* theoDoiActionRejectTaskApi (){
    yield takeLatest (REJECT_TASK_API,rejectTask)
}