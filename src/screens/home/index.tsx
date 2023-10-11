import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library'
import Feed from '../feed'
import Player from '../player'
import Favorites from '../favorites'
import Trending from '../trending'
import './home.css'
import SideBar from '../../components/sidebar'

function Home() {
    return (
        <Router>
            <div className='main-container'>
                <SideBar />
                <Routes>
                    <Route path='/' element={<Library />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/player' element={<Player />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/trending' element={<Trending />} />
                </Routes>
            </div>
        </Router >
    )
}

export default Home