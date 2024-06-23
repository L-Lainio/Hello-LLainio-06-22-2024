// src/components/BackgroundVideo.jsx

import React from 'react';

const BackgroundVideo = () => {
    return (
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100vh', // Adjust based on your needs
            overflow: 'hidden',
            zIndex: '-1' // Ensure the video stays behind other content
        }}>
            <video autoPlay muted loop style={{
                minWidth: '100%', minHeight: '100vh',
                objectFit: 'cover'
            }}>
                <source src="/videos/background.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default BackgroundVideo;
