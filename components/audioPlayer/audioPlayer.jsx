import { useRef, useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faFastForward, faFastBackward, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
//import "./audioPlayer.css";

const AudioPlayer = ({ playlist }) => {
    const [playStatus, setPlayStatus] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState(0);
    const [playProgress, setPlayProgress] = useState(0);
    const [volumeMuteStatus, setVolumeMuteStatus] = useState(false);
    const [loadedData, setLoadedData] = useState(false);
    const playerRef = useRef();

    useEffect(() => {
        setLoadedData(false);
        setPlayStatus(true)
        playerRef.current.play()
    }, [selectedTrack])

    useEffect(() => {
        setLoadedData(false);
        setPlayStatus(false)
        playerRef.current.pause()
    }, [])

    const handlePlay = useCallback(() => {
        const status = playStatus;
        setPlayStatus(!status)
        !status ? playerRef.current.play() : playerRef.current.pause()
    }, [playStatus])

    const handleStop = useCallback(() => {
        setPlayStatus(false);
        playerRef.current.pause();
        playerRef.current.currentTime = 0;
    }, [])

    const handleListOnCLick = useCallback((e) => {
        const selectedIndex = Number(e.target.id.split('=')[0]);
        setSelectedTrack(selectedIndex);
    }, [])

    const handleTrackEndPLay = useCallback(() => {
        if (selectedTrack < playlist.length - 1) {
            setSelectedTrack(prev => prev + 1)
        }
        else {
            handleStop();
        }
    }, [selectedTrack])

    const handleOnTimeUpdate = useCallback(() => {
        setPlayProgress(playerRef.current.currentTime)
    }, [])

    const handleSeek = useCallback((e) => {
        setPlayProgress(e.target.value);
        playerRef.current.currentTime = e.target.value;
    }, [])

    const handleSetVolume = useCallback((e) => {
        playerRef.current.volume = e.target.value;
    }, [])

    const handleMute = useCallback(() => {
        playerRef.current.muted = !playerRef.current.muted;
        setVolumeMuteStatus(playerRef.current.muted);
    }, [])

    const handleOnLoadData = useCallback(() => {
        setLoadedData(true);
    }, [])

    const formatDurationTime = () => {
        let durationInSeconds = parseInt(playerRef.current.duration);
        let seconds = durationInSeconds % 60;
        let minutes = (durationInSeconds - seconds) / 60;
        return `${minutes}:${seconds}`
    }

    const formatCurrentTime = () => {
        let currentTime = parseInt(playerRef.current.currentTime);
        let seconds = currentTime % 60;
        let minutes = (currentTime - seconds) / 60;
        if (seconds < 10) {
            seconds = "0" + seconds.toString();
        }
        return <><div>{`${minutes}:${seconds}`}</div><div>{formatDurationTime()}</div></>
    }

    const handleNextTrack = useCallback(() => {
        if (selectedTrack < playlist.length - 1) {
            setSelectedTrack(prev => prev + 1)
        }
    }, [selectedTrack])

    const handlePrevTrack = useCallback(() => {
        if (selectedTrack > 0) {
            setSelectedTrack(prev => prev - 1)
        }
    }, [selectedTrack])

    return (
        <div>
            <audio
                ref={playerRef}
                src={playlist[selectedTrack].url}
                onLoadedData={handleOnLoadData}
                onEnded={handleTrackEndPLay}
                onTimeUpdate={handleOnTimeUpdate}
            >
                Your browser does not support the audio element.
            </audio>
            <div className='custom-container-absolute'>
                <div className="d-flex flex-column mb-1">
                    <div className='player-controls-container d-flex flex-column mb-2'>
                        <div className='player-buttons-container'>
                            <button onClick={handlePlay} className="player-control-buttons me-2" style={{width: 40}}>
                                <FontAwesomeIcon icon={playStatus ? faPause : faPlay} size='2x' color='#ffffff8c' />
                            </button>
                            <button onClick={handleStop} className="player-control-buttons me-2" style={{width: 40}}>
                                <FontAwesomeIcon icon={faStop} size='2x' color='#ffffff8c'/>
                            </button>
                            <button onClick={handlePrevTrack} className="player-control-buttons me-2" style={{width: 40}} disabled={selectedTrack === 0}>
                                <FontAwesomeIcon icon={faFastBackward} size='2x' color={selectedTrack === 0 ? '#ffffff40' : '#ffffff8c'} />
                            </button>
                            <button onClick={handleNextTrack} className="player-control-buttons me-2" style={{width: 40}} disabled={selectedTrack === playlist.length - 1}>
                                <FontAwesomeIcon icon={faFastForward} size='2x' color={selectedTrack === playlist.length - 1 ? '#ffffff40' : '#ffffff8c'} />
                            </button>
                        </div>
                        <div id="player-volum-container">
                            <button onClick={handleMute} className="player-control-buttons me-2"><FontAwesomeIcon icon={volumeMuteStatus ? faVolumeMute : faVolumeUp} size='2x' color='#ffffff8c' style={{width: 40}}/></button>
                            <input type="range" className='w-100' min="0" max="1" onChange={handleSetVolume} step="0.1" disabled={volumeMuteStatus} />
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-start p-2">
                        <div className='d-flex justify-content-between w-100'>{loadedData ? formatCurrentTime() : '...loading'}</div>
                        <input type="range" className='w-100' min="0" max={playerRef?.current?.duration || 100} value={playProgress} onChange={handleSeek} />
                    </div>
                </div>
                <h4 style={{margin: '0.5rem', color: '#ffffff8c'}}>{playlist[selectedTrack].name.split('.')[1]}</h4>
                <ol className="player-playlist-container" style={{opacity: loadedData ? 1 : 0.4}} onClick={handleListOnCLick}>
                    {playlist.map((trackObj, index) => (
                        <li key={trackObj.name} id={`${index}=${trackObj.name}`} className={`${selectedTrack === index ? 'selected' : ''} mb-3`}>{trackObj.name.split('.')[1]}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default AudioPlayer;