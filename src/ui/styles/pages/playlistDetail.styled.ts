import { blackA, whiteA } from '@radix-ui/colors';
import { styled } from '@stitches/react';

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
    span: {
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 500,
        display: 'block',
        marginBottom: 8,
    },

    h2: {
        fontSize: 64,
    },

    p: {
        marginTop: 24,
        color: `${whiteA.whiteA11}`,
    },
});

export const SongsWrapper = styled('div', {
    backgroundColor: blackA.blackA8,
    transform: 'translateY(-208px)',
    height: 500,
    padding: '16px 32px',
});
