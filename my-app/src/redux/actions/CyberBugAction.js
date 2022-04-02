import { useNavigate } from "react-router"
import { SIGNIN_API } from "../constants/Cyberbugs/Cyberbugs"

 export const signinApiAction = (values,Navigate)=>{
     return{
        type:SIGNIN_API,
        values,
       Navigate
     }
 }