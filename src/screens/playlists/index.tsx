import React, { useEffect, useState } from 'react';
import './playlists.css';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IItemProperties, IPlaylistsResponse } from './types';

interface PlaylistCardProps {
  playlist: IItemProperties;
  playPlaylist: (id: string) => void;
}

const CLASSNAMES = {
  playlistCard: 'playlist-card',
  playlistImage: 'playlist-image',
  playlistTitle: 'playlist-title',
  playlistSubTitle: 'playlist-sub-title',
  playlistFade: 'playlist-fade',
};

const PlaylistCard: React.FC<PlaylistCardProps> = React.memo(({ playlist, playPlaylist }) => {
  const { name, id, tracks: { total }, images } = playlist;

  return (
    <div className={CLASSNAMES.playlistCard} key={id} onClick={() => playPlaylist(id)}>
      <img src={images[0]?.url} className={CLASSNAMES.playlistImage} alt={`Playlist ${name}`} />
      <span className={CLASSNAMES.playlistTitle}>{name}</span>
      <div className='playlist-text-container'>
        <span className={CLASSNAMES.playlistSubTitle}>
          {total ?? 0} {total === 1 ? 'Song' : 'Songs'}
        </span>
        <div className={CLASSNAMES.playlistFade}>
          <IconContext.Provider value={{ size: '50px', color: '#E99D72' }}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
});

const Playlists = () => {
  const [playlists, setPlaylists] = useState<IItemProperties[]>([]);

  useEffect(() => {
    fetch('/api/playlists')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: IPlaylistsResponse) => {
        setPlaylists(data.items);
      });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id: string) => {
    navigate('/', { state: { id } });
  };

  return (
    <div className='screen-container'>
      <div className='library-container'>
        {playlists?.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} playPlaylist={playPlaylist} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
