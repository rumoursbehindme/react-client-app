import React from 'react'
import './styles/sidebar.css'
import SidebarButton from './sidebar-button'

export default function SideBar() {
    return (
        <div className='sidebar-container'>
            <img src='logo192.png' className='profile-img' alt='profile' />
            <div>
                <SidebarButton />
                <SidebarButton />
                <SidebarButton />
                <SidebarButton />
                <SidebarButton />
            </div>
            <SidebarButton />
        </div>
    )
}
