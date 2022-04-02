import React from 'react'
import { Outlet, Route, Router, Routes } from 'react-router'
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/Login/Login'
import './cuberbug.css'
import MainZone from './MainZone'
import SidebarCyberbug from './SidebarCyberbug'

export default function BigCuberBugApp() {
    return (
        <div>
            <div className="cyberbug">
                <SidebarCyberbug />
                <div className="mainZone">
                    <Outlet />

                </div>
            </div>
        </div >
    )
}
