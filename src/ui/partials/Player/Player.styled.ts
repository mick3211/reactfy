import { styled } from 'ui/styles/theme';

export const PlayerContainer = styled('div', {
    gridArea: 'controls',
    p: 2,
    backgroundColor: '#121212',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: '1fr minmax(128px, 2fr) 1fr',
    columnGap: 24,
    alignItems: 'center',
});

export const SongInformationContainer = styled('div', {
    display: 'flex',
    gap: 24,
    alignItems: 'center',

    '& a:hover': {
        textDecoration: 'underline',
        color: 'white',
    },

    span: {
        color: '$slate11',
        fontSize: '0.75rem',
    },

    img: {
        borderRadius: 4,
    },
});

export const ControlsContainer = styled('div', {
    width: '100%',
    display: 'flex',
    alignitems: 'center',
    justifyContent: 'center',
    gap: 32,

    svg: {
        width: 20,
        height: 20,
        opacity: 0.8,

        '&:hover': {
            opacity: 1,
        },
    },
});

export const SongTitle = styled('a', {
    display: 'block',
    fontSize: '0.875rem',
});

export const VolumeWrapper = styled('div', {
    justifySelf: 'end',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
});

export const Controls = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
});
