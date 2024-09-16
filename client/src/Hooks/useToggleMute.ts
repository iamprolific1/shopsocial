import { useState, useRef } from 'react';

export const useToggleMute = (totalVideos: number) => {
    const [muteStatus, setMuteStatus] = useState<boolean[]>(Array(totalVideos).fill(true));
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const toggleMuteStatus = (index: number) => {
        setMuteStatus((prevMuteStatus) => {
            const newMuteStatus = [...prevMuteStatus];
            //reverse the previous mute status
            newMuteStatus[index] = !newMuteStatus[index];

            //update the video Element's muted status
            const videoElement = videoRefs.current[index]
            if(videoElement) {
                videoElement.muted = newMuteStatus[index]
            }
            return newMuteStatus;
        })
    }

    return { muteStatus, toggleMuteStatus, videoRefs }
}