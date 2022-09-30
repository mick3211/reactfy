import { PlaylistFullInterface } from 'data/types/PlaylistInterface';
import { useParams } from 'react-router-dom';
import { useApiSWR } from '../useApiSWR';
import { usePlayback } from '../UsePlayback';

export function usePlaylistDetailPage() {
    const { play, playerContext, togglePlay, isPaused } = usePlayback();
    const params = useParams();
    const playlistId = params.playlistId || '';
    const { data: playlist } = useApiSWR<PlaylistFullInterface>(
        `/playlists/${playlistId}`,
        {
            method: 'GET',
        }
    );

    function playTrack(trackUri: string) {
        play(playlist?.uri as string, { uri: trackUri });
    }

    return { playlist, play, playerContext, togglePlay, isPaused, playTrack };
}
