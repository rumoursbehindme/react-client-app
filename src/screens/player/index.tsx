import React, { useEffect, useState } from 'react'
import './player.css';
import { useLocation } from 'react-router-dom';
import { IPlayListItemsProperty, IPlayListProperty, ITrackProperties } from './types';

export default function Player() {
  const [items, setItems] = useState<IPlayListItemsProperty[] | null>(null);
  const [currentTrack, setCurrentTrack] = useState<ITrackProperties | null>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state.id) {
      fetch(`/playlists/${location.state.id}`)
        .then(response => response.json())
        .then((data: IPlayListProperty) => {
          setItems(data.items);
          setCurrentTrack(data.items[0].track)
        })
    }
  }, [location.state.id]);

  return (
    <div className='screen-container'></div>
  )
}
