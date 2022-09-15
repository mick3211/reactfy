import { styled } from '../theme';

export const HomeContainer = styled('div', {
    color: 'white',
    p: 4,
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
});

export const Greetings = styled('h2', {
    fontSize: 32,
    fontWeight: 'bold',
    mb: 2,
});

export const RecentsContainer = styled('div', {
    backgroundImage: 'linear-gradient(180deg, var(--color) 0%, $slate2 80%)',
    p: 4,
});

export const RecentsList = styled('ul', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(max(240px, 31%), 1fr))',
    gap: '16px 24px',
    fontSize: 14,
    fontWeight: 600,

    li: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'background-color .2s',
        pr: 2,

        button: {
            marginLeft: 'auto',
            opacity: 0,
            transition: 'opacity .2s',
        },

        '&:hover button': {
            opacity: 1,
        },
    },

    'li:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
});
