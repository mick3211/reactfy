import { styled } from '../theme';

export const LoginContainer = styled('div', {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100vh',
    py: 4,

    '& div': {
        textAlign: 'center',
    },
});

export const CustomLogo = styled('p', {
    mt: -2,
    fontSize: '24px',
    color: '$main',
});

export const Message = styled('p', {
    my: 2,
});
