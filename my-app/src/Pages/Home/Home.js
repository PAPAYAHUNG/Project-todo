import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
export default function Home(props) {
  let userLogin = useSelector(state=>state.UserCyberbugReducer.userLogin)
  console.log(userLogin)
  return (
    <div>
        {userLogin?.name}
        <img src={userLogin?.avatar} alt="124"/>
    </div>
  )
}
