import axios from 'axios'
import { fork, take, takeEvery, takeLatest, call, put, delay, select } from 'redux-saga/effects'
import { REDIRECT_SAGA, SIGNIN_API, USLOGIN_ACTION } from '../../constants/Cyberbugs/Cyberbugs'
import { cyberlearnService } from '../../../services/CyberBugService'
import { DISPLAY_LOADING, HIDE_LOADING } from '../../constants/LoadingConst'
import { STATUS_CODE, TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem'
import { Navigate, useNavigate } from 'react-router'
import { combineReducers } from 'redux'
import { history } from '../../../util/libs/history'



// import { push } from 'react-router-redux';    
import React from 'react'
// let navigate = useNavigate()
function* signInApiAction(action) {
 
    console.log(action)
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(600)
    try {
        let { data, status } = yield call(() => { return cyberlearnService.signinApi(action.values) })
        console.log(data)
        if (status === STATUS_CODE.SUCCESS) {
            localStorage.setItem(TOKEN, data.content.accessToken)
            localStorage.setItem(USER_LOGIN, JSON.stringify(data.content))
           
            // yield put({
            //     type:REDIRECT_SAGA
            // })
            yield put ({
                type:USLOGIN_ACTION,
                userLogin:data.content
            })
     
        //   yield  history.push('/')
        //   <Navigate to="/about" />;
        }
    }

    catch (err) {
        console.log(err.response.data)
    }
    yield put({
        type: HIDE_LOADING
    })
}

function* redirecApi(action) {
    // console.log(action.navigate)
    // yield action.navigate('/')
}

export function* theoDoiActionSigninApi() {
    yield takeLatest(SIGNIN_API, signInApiAction)
}
export function* theoDoiActionRedirec() {
    yield takeLatest(REDIRECT_SAGA, redirecApi)
}