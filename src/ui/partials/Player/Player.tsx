import {
    HeartFilledIcon,
    LoopIcon,
    PauseIcon,
    ResumeIcon,
    ShuffleIcon,
    SpeakerLoudIcon,
    SpeakerModerateIcon,
    SpeakerOffIcon,
    SpeakerQuietIcon,
    TrackNextIcon,
    TrackPreviousIcon,
} from '@radix-ui/react-icons';
import { usePlayback } from 'data/hooks/UsePlayback';
import React from 'react';
import { Range } from 'ui/components/inputs/Range/Range';
import {
    Controls,
    ControlsContainer,
    PlayerContainer,
    SongInformationContainer,
    SongTitle,
    VolumeWrapper,
} from './Player.styled';

export const Player: React.FC = () => {
    const {
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
    } = usePlayback(1000);

    return (
        <PlayerContainer>
            {currentTrack ? (
                <SongInformationContainer>
                    <img
                        src={currentTrack.album.images[1].url}
                        alt={currentTrack.album.name}
                    />
                    <div>
                        <SongTitle href={currentTrack.album.uri}>
                            {currentTrack.name}
                        </SongTitle>
                        <span>
                            {currentTrack.artists.map((artist, index) => (
                                <React.Fragment key={artist.uri}>
                                    <a href={artist.url}>{artist.name}</a>

                                    {index !==
                                        currentTrack.artists.length - 1 && ', '}
                                </React.Fragment>
                            ))}
                        </span>
                    </div>
                    <HeartFilledIcon color="#0F0" />
                </SongInformationContainer>
            ) : (
                'Nada tocando no momento...'
            )}
            <Controls>
                <ControlsContainer>
                    <ShuffleIcon />
                    <TrackPreviousIcon onClick={previousTrack} />
                    {isPaused ? (
                        <ResumeIcon onClick={togglePlay} />
                    ) : (
                        <PauseIcon onClick={togglePlay} />
                    )}
                    <TrackNextIcon onClick={nextTrack} />
                    <LoopIcon />
                </ControlsContainer>
                <Range
                    value={(currentTrackPosition / currentTrackDuration) * 100}
                    onChange={setTrackPosition}
                    maxWidth="900px"
                    disabled={currentTrack === undefined}
                />
            </Controls>
            <VolumeWrapper>
                {volume > 60 ? (
                    <SpeakerLoudIcon />
                ) : volume > 40 ? (
                    <SpeakerModerateIcon />
                ) : volume > 0 ? (
                    <SpeakerQuietIcon />
                ) : (
                    <SpeakerOffIcon />
                )}
                <Range value={volume} onChange={setVolume} width="128px" />
            </VolumeWrapper>
        </PlayerContainer>
    );
};
