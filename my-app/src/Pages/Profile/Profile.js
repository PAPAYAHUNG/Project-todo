import React from 'react'
import { Navigate, useNavigate } from 'react-router'

export default function Profile(props) {
    let navigate = useNavigate()
    if(localStorage.getItem('userLogin')){
       
        return <Navigate to="/home"/>
        
    }
    else{
        alert('Vui long dang nhap de vao trang nay')
        // navigate('/login', {replace: true});
    //    return navigate('/login', {replace: true});
       return <Navigate to="/login"/>
    }
}
