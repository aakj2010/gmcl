import React from 'react'
import SideBar from '../sidebar/SideBar'
import TopBar from '../topbar/TopBar'
import { Outlet } from 'react-router-dom';
import './Portal.css'


function Portal() {
    return (
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id='content'>
                    <TopBar />

                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Portal