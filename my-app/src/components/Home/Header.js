import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
export default function Header(props) {
    let navigate= useNavigate()

    let dispatch=useDispatch()
    const checkOnWHom = (event)=>{
        let {name}=event.target
        // console.log(name)
        dispatch({
            type:"CHECK_WHOM",
            name
        })
    }
    return (
        <div>

            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Hung Kun Site</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link " onClick={checkOnWHom} to="/" name="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkOnWHom} to="/about" name="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkOnWHom} to="/contact" name="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkOnWHom} to="/login" name="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkOnWHom} to="/todolistrcc" name="/todolistrcc">ToDoListRCC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkOnWHom} to="/todolistrfc" name="/todolistrfc">ToDoListRFC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkOnWHom} to="/todolistRedux" name="/todolistRedux">ToDoListREDUX</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkOnWHom} to="/todolistSaga" name="/todolistSaga">ToDoListSAGA</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkOnWHom} to="/DemoHOCmodal" name="/DemoHOCmodal">DemoHOCModal</NavLink>
                        </li>
                        


                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

