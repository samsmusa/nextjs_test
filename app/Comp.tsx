'use client';

import React, { useEffect, useRef } from 'react';

interface TutorialProps {
    manifestUrl: string;
    posterUrl?: string;
}

const ShakaVideoPlayer: React.FC<TutorialProps> = ({ manifestUrl, posterUrl }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Initialize Shaka Player when the component mounts
        const initPlayer = async () => {
            const video = videoRef.current;
            const videoContainer = videoContainerRef.current;

            if (!video || !videoContainer) return;

            // Initialize the Shaka Player
            const shaka = await import('shaka-player/dist/shaka-player.ui.js');
            const player = new shaka.Player(video);
            // const ui = new shaka.ui.Overlay(player, videoContainer, video);


            // Handle error events
            player.addEventListener('error', (error) => {
                console?.error('Error code', error.code, 'object', error);
            });

            // Load the video manifest
            try {
                await player.load(manifestUrl);
                console.log('The video has now been loaded!');
            } catch (error) {
                console?.error('Error loading video:', error);
            }
        };

        initPlayer();

        // Cleanup: Destroy player on unmount
        return () => {
            const video = videoRef.current;
            if (video) {
                // eslint-disable-next-line @typescript-eslint/no-require-imports
                const shaka = require('shaka-player');
                const player = shaka.Player.get(video);
                player?.destroy();
            }
        };
    }, [manifestUrl]);

    return (
        <div
            ref={videoContainerRef}
            className="shadow-lg mx-auto max-w-full"
            style={{ width: '800px' }}
        >
            <video
                id="video"
                ref={videoRef}
                className="w-full h-full"
                poster={posterUrl}
            />
        </div>
    );
};

export default ShakaVideoPlayer;
