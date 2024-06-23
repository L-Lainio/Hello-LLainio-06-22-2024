// Corrected BackgroundVideo component
import React, { useEffect, useRef } from 'react';

export default function BackgroundVideo({ src, targetSelector }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) return;

        const observer = new MutationObserver((mutationsList, observer) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    if (document.querySelector(targetSelector)) {
                        videoRef.current.style.display = 'block';
                    } else {
                        videoRef.current.style.display = 'none';
                    }
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, [targetSelector]);

    return (
        <div ref={videoRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, display: 'none' }}>
            <video autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={src}></video>
        </div>
    );
}
