import React, { useEffect, useMemo, useState } from 'react';
import { ITrackProperties } from '../../types';
import './song-card.css';

export default function SongCard(options: { track: ITrackProperties }) {
    const { track } = options;
    if(track){
        const [play, setPlay] = useState(false);
        const [totalDuration, setTotalDuration] = useState('');

        const audio = useMemo(() => new Audio(track?.preview_url), [track?.preview_url]);
    
        useEffect(() => {
            const handleLoadedMetadata = () => {
                // Access the total duration property of the audio element
                const durationInSeconds = audio.duration;
                
                // You may want to format the duration as needed (e.g., convert to minutes:seconds)
                const formattedDuration = formatDuration(durationInSeconds);
    
                // Set the total duration in your component state
                setTotalDuration(formattedDuration);
            };
    
            // Attach the event listener
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    
            // Clean up the event listener when the component is unmounted
            return () => {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }, [audio]);
        const formatDuration = (durationInSeconds:number = 30) => {
            const minutes = Math.floor(durationInSeconds / 60);
            const seconds = Math.floor(durationInSeconds % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        };
    
        console.log('Now playing:', track.name);
        useEffect(() => {
            // Clean up audio on component unmount
            return () => {
                audio.pause();
                audio.src = ''; // Release the audio resource
            };
        }, [audio]);

        useEffect(() => {
            // Handle changes in currentTrack and play state
            if (track) {
                try {
                    if (play) {
                        audio.src = track.preview_url;
                        audio.play();
                        console.log(`duration of the song is ${totalDuration}`)
                        console.log('Now playing:', track.name);
                    } else {
                        audio.pause();
                    }
                } catch (error) {
                    console.error('Error playing audio:', error);
                    // Handle error gracefully (e.g., show a message to the user)
                }
            }
        }, [track, play, audio]);

        useEffect(() => {
            // Add event listener for the 'ended' event
            const handleAudioEnded = () => {
                setPlay(false); // Pause completed, set play to false
                console.log('Song completed');
            };

            // Attach the event listener
            audio.addEventListener('ended', handleAudioEnded);

            // Clean up the event listener on component unmount
            return () => {
                audio.removeEventListener('ended', handleAudioEnded);
            };
        }, [audio]);

        function songCardPlay() {
            setPlay((play) => !play);
            console.log('I am setting play as true');
        }

        function playingText() {
            return play ? 'Playing' : 'Click to Play';
        }

        return (
            <div className={`song-card-container ${play ? 'playing' : ''}`} onClick={songCardPlay}>
                <img className='song-card-image' src={track?.album.images[0].url} alt={track?.name} />
                <span className={`song-name ${play ? 'moving' : ''}`}>{track?.name}</span>
                <span className={`status-text ${play ? 'green' : ''}`}>{playingText()}</span>
            </div>
        );
    }
    return (
        <div className='song-card-container' >
            No playlists audio please add playlist audio.
        </div>
    )
}
