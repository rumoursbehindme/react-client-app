import React from 'react'
import notFound from '../../assets/Page not found.png'

function PageNotFound() {
  return (
    <div className='screen-container' >
        <h1>Page Not Found !</h1>
      <img src={notFound} alt="logo" />
    </div>
  )
}

export default PageNotFound