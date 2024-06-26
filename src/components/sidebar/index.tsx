import React from 'react';
import './styles/sidebar.css';
import SidebarButton from './sidebar-button';
import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from "react-icons/io5";
import { getTranslater } from '../../common';

export default function SideBar() {

    const t = getTranslater('sidebar')
    return (
        <div className='sidebar-container'>
            <img src='/logo192.png' className='profile-img' alt='profile' />
            <div className='navigation-container'>
                <SidebarButton title={t('feed')} redirectUrl='/player/feed' icon={<MdSpaceDashboard />} />
                <SidebarButton title={t('trending')} redirectUrl='/player/trending' icon={<FaGripfire />} />
                <SidebarButton title={t('player')} redirectUrl='/player' icon={<FaPlay />} />
                <SidebarButton title={t('favorites')} redirectUrl='/player/favorites' icon={<MdFavorite />} />
                <SidebarButton title={t('playlists')} redirectUrl='/player/playlists' icon={<IoLibrary />} />
            </div>
            <SidebarButton title='Sign Out' redirectUrl='/logout' icon={<FaSignOutAlt />} reload />
        </div>
    )
}
