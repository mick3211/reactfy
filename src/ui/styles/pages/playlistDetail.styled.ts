import { blackA, whiteA } from '@radix-ui/colors';
import { styled } from '../theme';

export const HeaderWrapper = styled('div', {
    backgroundImage: 'linear-gradient(180deg, red 0%, $slate2 100%)',
    padding: '0 32px 240px',
    display: 'flex',
    gap: 16,
    alignItems: 'flex-end',
    position: 'relative',

    img: {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        width: 232,
    },
});

export const PlaylistInformation = styled('div', {
    '& > span': {
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 500,
        display: 'block',
        mb: 1,
    },

    h2: {
        fontSize: 64,
        mb: 3,
    },

    '& p': {
        mb: 2,
        color: `${whiteA.whiteA11}`,
    },

    a: {
        fontWeight: 'bold',
        color: 'white',

        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

export const SongsWrapper = styled('div', {
    backgroundColor: blackA.blackA8,
    transform: 'translateY(-208px)',
    marginBottom: -208,
    py: 2,
    px: 4,
});
