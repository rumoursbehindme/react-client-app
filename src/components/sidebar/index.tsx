import React from 'react';
import './styles/sidebar.css';
import SidebarButton from './sidebar-button';
import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from "react-icons/io5";


export default function SideBar() {
    return (
        <div className='sidebar-container'>
            <img src='logo192.png' className='profile-img' alt='profile' />
            <div className='navigation-container'>
                <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />} />
                <SidebarButton title='Trending' to='/trending' icon={<FaGripfire />} />
                <SidebarButton title='Player' to='/player' icon={<FaPlay />} />
                <SidebarButton title='Favorites' to='/favorites' icon={<MdFavorite />} />
                <SidebarButton title='Library' to='/' icon={<IoLibrary />} />
            </div>
            <SidebarButton title='Sign Out' to='/signout' icon={<FaSignOutAlt />} />
        </div>
    )
}
