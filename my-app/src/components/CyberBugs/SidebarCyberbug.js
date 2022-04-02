import { replace } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useParams } from 'react-router'
import { Link, NavLink,useLocation } from 'react-router-dom'
import { CHANGE_MAIN_ZONE_SAGA, GET_ALL_PROJECT_FOR_MODAL_SAGA } from '../../redux/constants/Cyberbugs/Cyberbugs'


export default function SidebarCyberbug() {
    let dispatch = useDispatch()
    let location = useLocation()
    let params = useParams()
    // console.log(params.idDetail)

    return (
        <div>
            <div className="sidebar">
                <div className="sidebar-icon d-flex flex-column justify-content-between pt-4">
                    <div className="icon-top text-center">
                        <h3><i className="fa fa-american-sign-language-interpreting mt-3" /></h3>
                        <div className='d-flex justify-content-center align-items-center mt-4'>
                            <i className="fa fa-search  mx-3"></i><span className=' needToShow'>
                                SEARCH ISSUE</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mt-4'>
                            <i className="fa fa-plus " />
                            <span className=' needToShow'>
                            <button onClick={()=>{
                                dispatch({
                                    type:GET_ALL_PROJECT_FOR_MODAL_SAGA
                                })
                            }} type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                                        ADD BUG
                                    </button>
                            </span>
                        </div>


                    </div>
                    <div className="icon-bottom">
                        <h3><i className="fa fa-question" /></h3>
                    </div>
                </div>
                <div className="sidebar-main pl-3">
                    <NavLink
                       
                        to={`main:${params.idDetail}`}
                        className=" mainLogo d-flex mt-4"
                        style={{ listStyle: 'none', textDecoration: 'none' }}>
                        <i className="fa fa-venus-double mr-2" style={{ fontSize: 40, color: 'red' }} />
                        <div>
                            <h5>Singularity 1.0</h5>
                            <p>Software project</p>
                        </div>
                    </NavLink>
                    <ul>

                        <li>
                            <NavLink
                                // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                                className={(navData) => navData.isActive ? "active_tab" : ""}
                                style={{ listStyle: 'none', textDecoration: 'none' }}  to={`main:${params?.idDetail}`}>
                                <i className="fa fa-luggage-cart mr-3" />
                                Kanban Board
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) => navData.isActive ? "active_tab" : ""}
                                style={{ listStyle: 'none', textDecoration: 'none' }} to='create'>
                                <i className="fa fa-cog mr-3" />
                                Create Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) => navData.isActive ? "active_tab" : ""}
                                style={{ listStyle: 'none', textDecoration: 'none' }} to='management'>
                                <i className="fa fa-cog mr-3" />
                                Project Management
                            </NavLink>
                        </li>
                        <li>
                            <hr style={{ border: 'solid gray 1px' }} />
                        </li>
                        <li>
                            <i className="fa fa-car-side mr-3" />
                            Releases
                        </li>
                        <li>
                            <i className="fa fa-carrot mr-3" />
                            Issue and filter
                        </li>
                        <li>
                            <i className="fa fa-luggage-cart mr-3" />
                            Pages
                        </li>
                        <li>
                            <i className="fab fa-cc-amazon-pay mr-3" />
                            Reports
                        </li>
                        <li>
                            <i className="fab fa-cc-diners-club mr-3" />
                            Components
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
