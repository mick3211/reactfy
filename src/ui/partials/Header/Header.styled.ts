import { styled } from 'ui/styles/theme';

export const HeaderContainer = styled('header', {
    zIndex: 1000,
    py: 1.5,
    px: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    gridArea: 'header',

    '& button:last-child': {
        marginLeft: 'auto',
    },
});

export const ButtonsContainer = styled('div', {
    display: 'flex',
    gap: 24,

    '& svg': {
        width: 24,
        height: 24,
    },
});
