import React from 'react'
import { ISidebarButtonProperties } from './types'
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom'
import './styles/sidebar-button.css'

export default function SidebarButton(properties: ISidebarButtonProperties) {
  const { redirectUrl, title, icon, reload = false } = properties;
  const location = useLocation();
  const isActive = location.pathname === redirectUrl;
  const sideBarButtonContainer = isActive ? 'sidebar-button-body active' : 'sidebar-button-body';
  return (
    <Link to={redirectUrl} reloadDocument={reload}>
      <div className={sideBarButtonContainer}>
        <IconContext.Provider value={{ size: '24px', className: "sidebar-button-sub-container" }}>
          {icon}
          <p className='sidebar-button-title'>{title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}
