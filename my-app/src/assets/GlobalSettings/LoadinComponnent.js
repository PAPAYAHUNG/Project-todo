import React from 'react'
import { useSelector } from 'react-redux'
import styLoading from './LoadingComponent.module.css'
export default function LoadinComponnent() {

    let {isLoading} = useSelector(state=>state.LoadingReducer)
    if(isLoading){
        return (
          <div className={styLoading.bgLoading}>
              <img src={require('../imgLoading/Curve-Loading.gif')}/>
          </div>
        )
    }else{
        return ''
    }
}
