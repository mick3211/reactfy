import { PlaylistInterface } from 'data/types/PlaylistInterface';
import { useParams } from 'react-router-dom';
import { useApiSWR } from '../useApiSWR';

export function usePlaylistDetailPage() {
    const params = useParams();
    const playlistId = params.playlistId || '';
    const { data: playlist } = useApiSWR<PlaylistInterface>(
        `/playlists/${playlistId}`,
        {
            method: 'GET',
        }
    );

    console.log(playlist);

    return { playlist };
}
