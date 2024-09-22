import React, { useState, useRef } from 'react';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "@mui/material";
import styles from './index.module.css';

export const VideoPlayer: React.FC<{ videoSrc: string }> = ({ videoSrc })=> {

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string>("00:00");

    const togglePlayPause = ()=> {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying)
        }
    };

    const updateTime = ()=> {
        if(videoRef.current){
            const minutes = Math.floor(videoRef.current.currentTime / 60);
            const seconds = Math.floor(videoRef.current.currentTime % 60);
    
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    
            setCurrentTime(`${formattedMinutes}:${formattedSeconds}`);
        }
    };

    const handleVideoEnd = ()=> {
        setIsPlaying(false);
    }

    return (
        <div className={styles['marketingVideo']}>
            <video
                className={styles['videoElement']}
                src={videoSrc}
                ref={videoRef}
                onTimeUpdate={updateTime}
                onEnded={handleVideoEnd}
            >
            </video>

            <div className={styles['controls']}>
                <IconButton
                    onClick={togglePlayPause}
                    aria-label="play/pause"
                    sx={{ color:  '#16962B' }}
                >
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <span className={styles.timer}>{currentTime}</span>
            </div>
        </div>
    )
}