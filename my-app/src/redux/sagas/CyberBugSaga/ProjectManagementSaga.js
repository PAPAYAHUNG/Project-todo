import { call, delay, put, take, takeLatest } from "redux-saga/effects";
import { ASSIGN_MEMBER_SAGA, CHANGE_MAIN_ZONE_SAGA, CHANGE_MAIN_ZONE_SAGA_NORMAL, DELETE_PROJECT_SAGA, FECTH_PROJECT_MANAGEMENT, FECTH_PROJECT_MANAGEMENT_NORMAL, GET_ALL_PROJECT_FOR_MODAL_SAGA, GET_ALL_PROJECT_MODAL_NORMAL, GET_ALL_TASK_PRIORITY_NORMAL, GET_ALL_TASK_PRIORITY_SAGA, GET_ALL_TASK_TYPE_SAGA, GET_ALL_USER_MODAL_NORMAL, GET_ALL_USER_MODAL_SAGA, GET_TASK_TYPE_NORMAL, SEARCH_AUTO_COMPLETE, SEARCH_AUTO_COMPLETE_NORMAL, SEARCH_AUTO_COMPLETE_SAGA, SEND_UPDATE_SAGA, SEND_UPDATE_SAGA_NORMAL } from "../../constants/Cyberbugs/Cyberbugs";
import { cyberlearnService } from "../../../services/CyberBugService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { useDispatch } from "react-redux";
import { history } from "../../../util/libs/history";
import { DELETE_TASK_API } from "../../constants/ToDoListConstant";
import { notificationFunction } from "../../../components/Notification/Notification";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";
function* fecthProjectManagementAction() {
    try {
        let { data, status } = yield call(() => { return cyberlearnService.getAllProjectManagement() })
        // console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            // console.log(data.content)
            yield put({
                type: FECTH_PROJECT_MANAGEMENT_NORMAL,
                projectList: data.content
            })

        }
    }
    catch (err) {
        console.log(err.response.data)
    }
}

function* SendUpdateAction(action) {
    console.log(action.values)

    try {
        let { data, status } = yield call(() => { return cyberlearnService.sendUpdateProject(action.values) })
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            // yield put({
            //     type: SEND_UPDATE_SAGA_NORMAL,
            //     content:data.content
            // })
            yield put({
                type: FECTH_PROJECT_MANAGEMENT,

            })
            yield put({
                type: 'CLOSE_DRAWER',

            })
        }
    }
    catch (err) {
        console.log(err.response.data)
    }
}

function* DeleteProjectAction(action) {

    try {
        let { data, status } = yield call(() => { return cyberlearnService.DeleteProject(action.id) })
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: FECTH_PROJECT_MANAGEMENT,
            })
            notificationFunction('success', 'Delete is succeed')
        }
    }
    catch (err) {
        console.log(err.response.data)
        notificationFunction('error', 'Delete is failed')

    }
}
function* SearchUserAutoCompleteAction(action) {

    try {
        let { data, status } = yield call(() => { return cyberlearnService.getSearchAutoCompleteUser(action.value) })
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SEARCH_AUTO_COMPLETE_NORMAL,
                listSearch: data.content
            })
        }
    }
    catch (err) {
        console.log(err.response.data)
    }
}

function* ActionAsignMember(action) {
    console.log(action.UserProject)
    try {
        let { data, status } = yield call(() => { return cyberlearnService.postAssignMemberToProject(action.UserProject) })
        console.log(data)

        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: FECTH_PROJECT_MANAGEMENT_NORMAL,
                data: data.content
            })
        }
    }
    catch (err) {
        console.log(err.response.data)
    }

}

function* ActionChangeMainZone(action) {
    console.log(action.idTosend)
    // yield put({
    //     type:DISPLAY_LOADING
    // })
    // yield delay(1000)
    try {
        let { data, status } = yield call(() => { return cyberlearnService.getProjectDeatail(action.idTosend) })
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: CHANGE_MAIN_ZONE_SAGA_NORMAL,
                data: data.content
            })
        }
    }
    catch (err) {
        console.log(err.response.data)
    }
    // yield put({
    //     type:HIDE_LOADING
    // })
}


function* GetprojectAllForModal(action) {
    try {
        let { data, status } = yield call(() => { return cyberlearnService.getAllProjectForModal() })
        // console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_PROJECT_MODAL_NORMAL,
                data: data.content
            })
        }
    } catch (err) {
        console.log(err.response.data)
    }
}
function* ActionGetAllTaskType(action) {
    try {
        let { data, status } = yield call(() => { return cyberlearnService.getAllTaskType() })
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_TYPE_NORMAL,
                data: data.content
            })
        }
    } catch (err) {
        console.log(err.response.data)
    }
}
function* ActionGetPriority(action) {
    try {
        let { data, status } = yield call(() => { return cyberlearnService.getAllPriority() })
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_TASK_PRIORITY_NORMAL,
                data: data.content
            })
        }
    } catch (err) {
        console.log(err.response.data)
    }
}
    function* ActionGetUserModal(action) {
        try {
            let { data, status } = yield call(() => { return cyberlearnService.getAllUsersForModal() })
            // console.log(data)
            if (status === STATUS_CODE.SUCCESS) {
                yield put({
                    type: GET_ALL_USER_MODAL_NORMAL,
                    data: data.content
                })
            }
        } catch (err) {
            console.log(err.response.data)
        }
    }




    //----------------Watcher-----------------------
    export function* theoDoiActionFecthProjectManagement() {
        yield takeLatest(FECTH_PROJECT_MANAGEMENT, fecthProjectManagementAction)
    }

    export function* theoDoiSendUpdateAction() {
        yield takeLatest(SEND_UPDATE_SAGA, SendUpdateAction)
    }

    export function* theoDoiDeleteProjectAction() {
        yield takeLatest(DELETE_PROJECT_SAGA, DeleteProjectAction)
    }

    export function* theoDoiActionSearchUserAutoComplete() {
        yield takeLatest(SEARCH_AUTO_COMPLETE_SAGA, SearchUserAutoCompleteAction)
    }

    export function* theoDoiActionAsignMember() {
        yield takeLatest(ASSIGN_MEMBER_SAGA, ActionAsignMember)
    }

    export function* theoDoiActionChangeMainZone() {
        yield takeLatest(CHANGE_MAIN_ZONE_SAGA, ActionChangeMainZone)
    }

    export function* theoDoiActionGetAllForModal() {
        yield takeLatest(GET_ALL_PROJECT_FOR_MODAL_SAGA, GetprojectAllForModal)
    }
    export function* theoDoiActionGetAllTaskType() {
        yield takeLatest(GET_ALL_TASK_TYPE_SAGA, ActionGetAllTaskType)
    }
    export function* theoDoiActionGetPriority() {
        yield takeLatest(GET_ALL_TASK_PRIORITY_SAGA, ActionGetPriority)
    }
    export function* theoDoiActionGetUserModal() {
        yield takeLatest(GET_ALL_USER_MODAL_SAGA, ActionGetUserModal)
    } 