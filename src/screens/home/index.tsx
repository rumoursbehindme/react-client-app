import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library';
import Feed from '../feed';
import Player from '../player';
import Favorites from '../favorites';
import Trending from '../trending';
import './home.css';
import SideBar from '../../components/sidebar';
import PageNotFound from '../../components/page-not-found/page-not-found';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';

function Home() {

    const [token, setToken] = useState('');

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token && token !== 'undefined') {
            setToken(token)
            setClientToken(token);
        } else {
            const hash = window.location.hash;
            const accessToken = hash.split('&')[0].split('=')[1];

            const localStorageValue = {
                value: accessToken,
                expiration: new Date().getTime() + 30 * 1000
            }
            window.localStorage.setItem('token', JSON.stringify(localStorageValue));
            setToken(accessToken);
            setClientToken(accessToken);
        }
    }, [])

    return (
        !token ?
            <Login /> :
            <Router>
                <div className='main-container'>
                    <SideBar />
                    <Routes>
                        <Route path='/' element={<Library />} />
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/player' element={<Player />} />
                        <Route path='/favorites' element={<Favorites />} />
                        <Route path='/trending' element={<Trending />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </div>
            </Router >
    )
}

export default Home