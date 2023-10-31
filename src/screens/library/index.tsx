import React, { useEffect, useState } from 'react'
import { apiClient } from '../../spotify'


export default function Library() {

  const [playlists, setPlaylists] = useState<any[]>([]);

  useEffect(() => {
    apiClient.get('me/playlists').then(function (response) {
      console.log(response.data.items);
      setPlaylists(response.data.items)
    })
  },[])

  return (
    <div className='screen-container'>
      {
        playlists?.map(playlist=>
          <div key={playlist.id}>{playlist.name}</div>)
      }
    </div>
  )
}
