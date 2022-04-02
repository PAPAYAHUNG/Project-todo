//Có hai loại action
//Loại 1: action =>object (action thường)
//loại 2 :action =>function (thường dùng đẻ xử lý api hoặc gọi các action khác)
import axios from 'axios'
import {fork,take,takeEvery,takeLatest,call,put,all} from 'redux-saga/effects'
import * as TodoListSaga from './TodoListSaga'
import * as Cyberbugs from './CyberBugSaga/CyberBugSaga'
import * as ProjectCategorySaga from './CyberBugSaga/ProjectCategorySaga'
import * as ProjecManagement from './CyberBugSaga/ProjectManagementSaga'
// import { theoDoiActionGetTaskApi } from './TodoListSaga'



export function * rootSaga(){
 yield all([
     //Nghiep vu theo doi tat ca cac action saga
       TodoListSaga.theoDoiActionGetTaskApi(),
       TodoListSaga.theoDoiActionAddTaskApi(),
       TodoListSaga.theoDoiActionDeleteTaskApi(),
       TodoListSaga.theoDoiActionCheckCompleteTaskApi(),
       TodoListSaga.theoDoiActionRejectTaskApi(),
       
       //Nghiep vu cyberbug
       Cyberbugs.theoDoiActionSigninApi(),
       Cyberbugs.theoDoiActionRedirec(),
       //Nghiep lay all task category
       ProjectCategorySaga.theoDoigetCategoryAction(),
       ProjectCategorySaga.theoDoiActionAddProject(),
       //Nghiep vu lay all task project management
       ProjecManagement.theoDoiActionFecthProjectManagement(),
       ProjecManagement.theoDoiSendUpdateAction(),
       ProjecManagement.theoDoiDeleteProjectAction(),
       ProjecManagement.theoDoiActionSearchUserAutoComplete(),
       ProjecManagement.theoDoiActionAsignMember(),
       ProjecManagement.theoDoiActionChangeMainZone(),
       ProjecManagement.theoDoiActionGetAllForModal(),
       ProjecManagement.theoDoiActionGetAllTaskType(),
       ProjecManagement.theoDoiActionGetPriority(),
       ProjecManagement.theoDoiActionGetUserModal(),


 ])
 
}