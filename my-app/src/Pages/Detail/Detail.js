import React from 'react'
import { useEffect } from 'react';
import { useParams,useNavigate, Outlet } from 'react-router'
import { Link } from 'react-router-dom';
const users = [
    {id:1,fullName:'iphoneX'},
    {id:2,fullName:'iphonesx'},
    {id:3,fullName:'iphone Pro max'},
]
export default function Detail(props) {
    // let params= useParams()
//     let navigate = useNavigate(props)
//     const renderScreen = ()=>{
//     //   navigate(`/detail${params}`) 
//     return `day la trang ${props.match.params.id} `
//   }

// const Something = ({match}) => {
    
    //   }
    let { id } = useParams()
    const Child = () => {
        return  users.map((user) => {
            console.log(user)
            return  <li key={user.id}>
            <Link to={user.id}>
              {user.fullName}
            </Link>
          </li>
        }
   
  )}

    return (
    <div>
        Helllo this is detail page
        <ul>
           {Child}
        </ul>
      <Outlet/>
    </div>
  )
}
