import React from "react";
import { Route } from "react-router";


export const UserLoginTemplate = (props)=>{
    let {Component,...restRoute} = props

    return   <Route {...restRoute} element={(propsRoute)=>(
        <>
            <Component {...propsRoute}/>
        </>
    )
   }
}
