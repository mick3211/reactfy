import { ClockIcon, PauseIcon, PlayIcon } from '@radix-ui/react-icons';
import { usePlaylistDetailPage } from 'data/hooks/pages/usePlaylistDetail.page';
import React from 'react';
import {
    Table,
    TableCell,
    TableRow,
} from 'ui/components/dataDisplay/Table/Table';
import { Button } from 'ui/components/inputs/Button/Button';
import {
    HeaderWrapper,
    PlaylistInformation,
    SongsWrapper,
} from 'ui/styles/pages/playlistDetail.styled';

export const PlaylistDetailPage: React.FC = () => {
    const { playlist, play, playerContext, togglePlay, isPaused, playTrack } =
        usePlaylistDetailPage();

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
                        <p
                            dangerouslySetInnerHTML={{
                                __html: playlist.description,
                            }}
                        />
                    )}
                    <div style={{ fontSize: 14 }}>
                        <a href={playlist.owner.external_urls.spotify}>
                            {playlist.owner.display_name}
                        </a>

                        <span> &#8226; </span>
                        <span>
                            {playlist.followers.total +
                                (playlist.followers.total > 1
                                    ? ' curtidas'
                                    : ' curtida')}
                        </span>
                        <span> &#8226; </span>
                        <span>
                            {playlist.tracks.total +
                                (playlist.tracks.total > 1
                                    ? ' músicas'
                                    : ' música')}
                        </span>
                    </div>
                </PlaylistInformation>
            </HeaderWrapper>
            <SongsWrapper>
                {playerContext?.uri !== playlist.uri ? (
                    <Button shape="circular" onClick={() => play(playlist.uri)}>
                        <PlayIcon width={32} height={32} />
                    </Button>
                ) : (
                    <Button shape="circular" onClick={togglePlay}>
                        {isPaused ? (
                            <PlayIcon width={32} height={32} />
                        ) : (
                            <PauseIcon width={32} height={32} />
                        )}
                    </Button>
                )}

                <Table
                    data={playlist.tracks.items}
                    gridCols="32px 6fr 4fr 3fr minmax(120px, 1fr)"
                    header={[
                        '#',
                        'Título',
                        'Álbum',
                        'Adicionado em',
                        <ClockIcon width={16} height={16} />,
                    ]}
                    render={(item, index) => (
                        <TableRow
                            key={item.track.id}
                            onClick={() => playTrack(item.track.uri)}
                        >
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell>
                                <img
                                    src={item.track.album.images?.[2].url}
                                    alt={item.track.album.name}
                                    className="album-cover"
                                    width={40}
                                />
                                <div>
                                    <h5>{item.track.name}</h5>
                                    <span>
                                        {item.track.artists.map(
                                            (artist, index) => (
                                                <React.Fragment key={artist.id}>
                                                    <a
                                                        href={
                                                            artist.external_urls
                                                                .spotify
                                                        }
                                                    >
                                                        {artist.name}
                                                    </a>

                                                    {index !==
                                                        item.track.artists
                                                            .length -
                                                            1 && ', '}
                                                </React.Fragment>
                                            )
                                        )}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <a
                                    href={
                                        item.track.album.external_urls.spotify
                                    }
                                >
                                    {item.track.album.name}
                                </a>
                            </TableCell>
                            <TableCell>
                                {new Date(item.added_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                                {Math.floor(item.track.duration_ms / 60000)}:
                                {Math.floor(
                                    (item.track.duration_ms % 60000) / 1000
                                )
                                    .toString()
                                    .padStart(2, '0')}
                            </TableCell>
                        </TableRow>
                    )}
                />
            </SongsWrapper>
        </>
    );
};
