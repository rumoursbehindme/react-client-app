import React, { useEffect, useState } from 'react';
import './player.css';
import { useLocation } from 'react-router-dom';
import { IPlayListItemsProperty, IPlayListProperty, ITrackProperties } from '../../types';
import SongCard from '../../components/song-card/song-card';
import UpNext from '../../components/upnext/upnext';

export default function Player() {
  const [items, setItems] = useState<IPlayListItemsProperty[]>();
  const [currentTrack, setCurrentTrack] = useState<ITrackProperties>();
  const [upNextIndex, setUpNextIndex] = useState(-1);
  const [clickedSong, setClickedSong] = useState<ITrackProperties | undefined>();

  const location = useLocation();

  useEffect(() => {
    if (upNextIndex !== -1 && items) {
      setClickedSong(items[upNextIndex].track);
    }
  }, [upNextIndex, items]);

  useEffect(() => {
    if (location.state?.id) {
      fetch(`/api/playlists/${location.state.id}`)
        .then(response => response.json())
        .then((data: IPlayListProperty) => {
          setItems(data.items);
          setCurrentTrack(data.items[0].track);
        });
    } else {
      try {
        console.log('fetching playlists');
        fetch('/api/playlists')
          .then(response => response.json())
          .then(data => {
            const randomIndex = Math.floor(Math.random() * data.items.length);
            console.log(`fetching this song ${data.items[randomIndex].track}`);
            fetch(`/api/playlists/${data?.items[randomIndex].id}`)
              .then(response => response.json())
              .then((data: IPlayListProperty) => {
                setItems(data?.items);
                setCurrentTrack(data?.items[0]?.track);
              });
          });
      } catch (e) {
        console.log(e);
      }
    }
  }, [location.state]);

  return (
    <div className='screen-container'>
      <div className='player-container'>
        <SongCard track={clickedSong || currentTrack!} />
        <UpNext items={items!} setUpNextIndex={setUpNextIndex} sliceIndex={upNextIndex} />
      </div>
    </div>
  );
}
