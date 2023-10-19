import React from 'react';
import './styles/sidebar.css';
import SidebarButton from './sidebar-button';
import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from "react-icons/io5";
import { getTranslater } from '../../common/helper/localization-helper';

export default function SideBar() {

    const t = getTranslater('sidebar')
    return (
        <div className='sidebar-container'>
            <img src='logo192.png' className='profile-img' alt='profile' />
            <div className='navigation-container'>
                <SidebarButton title={t('feed')} redirectUrl='/feed' icon={<MdSpaceDashboard />} />
                <SidebarButton title={t('trending')} redirectUrl='/trending' icon={<FaGripfire />} />
                <SidebarButton title={t('player')} redirectUrl='/player' icon={<FaPlay />} />
                <SidebarButton title={t('favorites')} redirectUrl='/favorites' icon={<MdFavorite />} />
                <SidebarButton title={t('library')} redirectUrl='/' icon={<IoLibrary />} />
            </div>
            <SidebarButton title='Sign Out' redirectUrl='/signout' icon={<FaSignOutAlt />} />
        </div>
    )
}
