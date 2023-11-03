import React, { useEffect, useState } from 'react'
import { apiClient } from '../../spotify'
import './library.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export default function Library() {

  const [playlists, setPlaylists] = useState<any[]>([]);

  useEffect(() => {
    apiClient.get('me/playlists').then(function (response) {
      console.log(response.data.items);
      setPlaylists(response.data.items)
    })
  }, [])

  const navigate = useNavigate();

  const playPlaylist = (id: any) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className='screen-container'>
      <div className='library-container'>
        {
          playlists?.map(playlist => {
            const { name, id, tracks: { total }, images } = playlist;

            return <div className='playlist-card' key={id} onClick={() => playPlaylist(playlist.id)}>
              <img src={images[0].url} className='playlist-image' alt='PLAYLIST-CARD' />
              <div className='playlist-text-container'>
                <span className='playlist-title'>{name}</span>
                <span className='playlist-sub-title'>{total === 1 ? total + ' Song' : total + ' Songs'}</span>
              </div>
              <div className="playlist-fade">
                <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          }
          )
        }
      </div>
    </div>
  )
}
