import { PlayIcon } from '@radix-ui/react-icons';
import { usePlaylistDetailPage } from 'data/hooks/pages/usePlaylistDetail.page';
import { Button } from 'ui/components/inputs/Button/Button';
import {
    HeaderWrapper,
    PlaylistInformation,
    SongsWrapper,
} from 'ui/styles/pages/playlistDetail.styled';

export const PlaylistDetailPage: React.FC = () => {
    const { playlist } = usePlaylistDetailPage();

    if (!playlist) {
        return null;
    }

    return (
        <>
            <HeaderWrapper>
                <img
                    src={playlist?.images?.[0]?.url || ''}
                    alt={playlist?.name}
                />
                <PlaylistInformation>
                    <span>
                        {playlist?.public
                            ? 'Playlist pública'
                            : 'Playlist privada'}
                    </span>
                    <h2>{playlist?.name}</h2>
                    {playlist?.description.length > 0 && (
                        <p>{playlist.description}</p>
                    )}
                </PlaylistInformation>
            </HeaderWrapper>
            <SongsWrapper>
                <Button shape="circular">
                    <PlayIcon width={32} height={32} />
                </Button>
            </SongsWrapper>
        </>
    );
};
