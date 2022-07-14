import { useEffect } from 'react';
import { useState } from 'react';
import { getTracks } from '../services/api';
import AudioPlayer from '../components/audioPlayer/audioPlayer';
import { Spinner } from 'react-bootstrap';
//import './player.css';


const Player = () => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPlaylist, setShowPlaylist] = useState(false);

    useEffect(() => {
        setLoading(true);
        getTracks()
            .then(fbTracks => {
                const orderedTracks = [];
                fbTracks.forEach(tr => {
                    const arr = tr.value.name.split('.')
                    orderedTracks[Number(arr[0])-1] = tr
                })
                setTracks(orderedTracks);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, [])

    const handleOnPlay = () => {
        setShowPlaylist(true)
    }

    const handleOnStop = () => {
        setShowPlaylist(false)
    }

    return (
        <main className="main-player">
            {!loading ? <div className="player-container">
                {tracks.length > 0 &&
                <div>
                    <AudioPlayer
                        showPlaylist={showPlaylist} 
                        onStop={handleOnStop}
                        onPlay={handleOnPlay}
                        playlist={tracks.map(track => ({url: track.value.downloadUrl, name: track.value.name}))} />
                </div>}
            </div> : <Spinner animation="border" variant="light" style={{position: 'absolute', top: '50%', left: '50%'}}/>}
        </main>
    )
}

export default Player;