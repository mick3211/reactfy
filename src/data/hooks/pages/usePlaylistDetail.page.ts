import { PlaylistFullInterface } from 'data/types/PlaylistInterface';
import { useParams } from 'react-router-dom';
import { useApiSWR } from '../useApiSWR';

export function usePlaylistDetailPage() {
    const params = useParams();
    const playlistId = params.playlistId || '';
    const { data: playlist } = useApiSWR<PlaylistFullInterface>(
        `/playlists/${playlistId}`,
        {
            method: 'GET',
        }
    );

    return { playlist };
}
