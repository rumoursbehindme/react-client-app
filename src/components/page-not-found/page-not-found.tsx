import React from 'react'
import './page-not-found.css';
import pageNotFound from '../../../public/assets/png/page-not-found.png';

export default function PageNotFound() {
  return (
    <div className='screen-container' >
      <h1>Page Not Found !</h1>
      <img className='page-not-found-image' src={pageNotFound} alt="logo" />
    </div>
  )
}