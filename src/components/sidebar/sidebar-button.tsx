import React from 'react'
import { ISidebarButtonProperties } from './types'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom'
import './styles/sidebar-button.css'

export default function SidebarButton(properties: ISidebarButtonProperties) {
  const { to, title, icon } = properties;
  return (
    <Link to={to}>
      <div className='sidebar-button-body'>
        <IconContext.Provider value={{ size: '24px', className: "sidebar-button-sub-container" }}>
          {icon}
          <p className='sidebar-button-title'>{title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}
