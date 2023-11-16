import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import PlayLists from '../playlists';
import Feed from '../feed';
import Player from '../player';
import Favorites from '../favorites';
import Trending from '../trending';
import './home.css';
import SideBar from '../../components/sidebar';
import PageNotFound from '../../components/page-not-found/page-not-found';

function Home() {
    return (
        <Router>
            <div className='main-container'>
                <SideBar />
                <Routes>
                    <Route path='/playlists' element={<PlayLists />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/' element={<Player />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/trending' element={<Trending />} />                    
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
        </Router >
    )
}

export default Home