import { playbackContext } from 'data/contexts/PlaybackContext';
import { ApiService } from 'data/services/ApiService';
import { useContext, useEffect, useState } from 'react';

export function usePlayback(updateInterval?: number) {
    const { player, isConnected, playerId, playerState } =
        useContext(playbackContext);
    const currentTrack = playerState?.track_window.current_track;
    const isPaused = playerState?.paused;
    const [currentTrackPosition, setCurrentTrackPosition] = useState(
        playerState?.position || 0
    );
    const currentTrackDuration = playerState?.duration || 1;
    const [volume, setVolume] = useState(0.2);

    function setTrackPosition(position: number) {
        if (player) {
            player.seek((position / 100) * currentTrackDuration);
        }
    }

    function togglePlay() {
        if (player) {
            player.togglePlay();
        }
    }

    function nextTrack() {
        if (player) {
            player.nextTrack();
        }
    }

    function previousTrack() {
        if (player) {
            player.previousTrack();
        }
    }

    function play(uri: string, offset?: { position?: number; uri?: string }) {
        ApiService.put(
            '/me/player/play',
            {
                context_uri: uri,
                offset,
            },
            {
                params: {
                    device_id: playerId,
                },
            }
        );
    }

    useEffect(() => {
        (async () => {
            const vol = await player?.getVolume();
            setVolume(vol || 0.2);
        })();

        if (updateInterval && player) {
            const interval = window.setInterval(async () => {
                const state = await player.getCurrentState();
                setCurrentTrackPosition(state?.position || 0);
            }, updateInterval);

            return () => window.clearInterval(interval);
        }
    }, [player, updateInterval]);

    useEffect(() => {
        if (player) {
            player.setVolume(volume / 100);
        }
    }, [volume]);

    return {
        currentTrack,
        currentTrackPosition,
        currentTrackDuration,
        volume,
        setVolume,
        setTrackPosition,
        togglePlay,
        isPaused,
        nextTrack,
        previousTrack,
        play,
        playerContext: playerState?.context,
    };
}
