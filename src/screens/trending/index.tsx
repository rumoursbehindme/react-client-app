import React, { useEffect, useState } from 'react';
import ViewSwitcher from '../../components/switch-view';
import './trending.css';

interface IFeaturedTrack {
  id: number;
  name: string;
  [key: string]: any;
}

export default function Trending(): JSX.Element {
  const [featuredTracks, setFeaturedTracks] = useState<IFeaturedTrack[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    fetch('/api/featured-tracks')
      .then(response => response.json())
      .then((data: IFeaturedTrack[]) => {
        setFeaturedTracks(data);
      });
  }, []);

  return (
    <div className='screen-container'>
      <ViewSwitcher onChangeView={setViewMode} />
      <div className={viewMode === 'grid' ? 'trending-container-grid' : 'trending-container-list'}>
        {featuredTracks.map((item: IFeaturedTrack) => (
          <div className='collection-card' key={item.id} onClick={() => alert('Not yet implemented man!!! Loads of works to do.')}>
            <img className='collection-image' src={item.images[0].url} alt={item.name} />
            <span className='collection-title'>{item.name}</span>
            <span className='collection-subtitle'>
              {item.tracks.total ?? 0} {item.tracks.total === 1 ? 'Song' : 'Songs'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
