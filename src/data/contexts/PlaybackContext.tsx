import { LocalStorage } from 'data/services/StorageService';
import React, { createContext, useEffect, useState } from 'react';

interface PlaybackStateInterface {
    player?: Spotify.Player | null;
    playerId?: string | null;
    isConnected: boolean;
    playerState?: Spotify.PlaybackState | null;
}

const initialState: PlaybackStateInterface = {
    player: null,
    playerId: '',
    isConnected: false,
    playerState: null,
};

export const playbackContext = createContext(initialState);

interface PlaybackProviderProps {
    children: React.ReactNode;
}

export const PlaybackProvider: React.FC<PlaybackProviderProps> = ({
    children,
}) => {
    const [isReady, setIsReady] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [player, setPlayer] = useState<Spotify.Player>();
    const [playerId, setPlayerId] = useState('');
    const [playerState, setPlayerState] = useState<Spotify.PlaybackState>();

    window.onSpotifyWebPlaybackSDKReady = () => {
        setIsReady(true);
    };

    useEffect(() => {
        if (!player) {
            const newPlayer = new Spotify.Player({
                name: 'Reactfy',
                getOAuthToken: callback => {
                    const access_token = LocalStorage.get('access_token', '');
                    callback(access_token);
                },
            });
            setPlayer(newPlayer);
        }
    }, [isReady]);

    useEffect(() => {
        if (player) {
            player.on('ready', ({ device_id }) => {
                setPlayerId(device_id);
            });
            player.on('player_state_changed', state => {
                setPlayerState(state);
            });

            player.connect().then(success => setIsConnected(success));
        }

        return () => {
            player?.disconnect();
        };
    }, [player]);

    return (
        <playbackContext.Provider
            value={{ player, playerId, playerState, isConnected }}
        >
            {children}
        </playbackContext.Provider>
    );
};
