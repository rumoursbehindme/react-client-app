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
                <SidebarButton title='Feed' redirectUrl='/feed' icon={<MdSpaceDashboard />} />
                <SidebarButton title='Trending' redirectUrl='/trending' icon={<FaGripfire />} />
                <SidebarButton title='Player' redirectUrl='/player' icon={<FaPlay />} />
                <SidebarButton title='Favorites' redirectUrl='/favorites' icon={<MdFavorite />} />
                <SidebarButton title='Library' redirectUrl='/' icon={<IoLibrary />} />
            </div>
            <SidebarButton title='Sign Out' redirectUrl='/signout' icon={<FaSignOutAlt />} />
        </div>
    )
}
