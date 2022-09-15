import { styled } from 'ui/styles/theme';

export const ListHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3,

    h5: {
        fontSize: '1.5rem',
    },

    a: {
        fontWeight: 500,
        color: '$slate11',
        fontSize: '0.875rem',

        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

export const HorizontalListContent = styled('div', {
    display: 'grid',
    columnGap: 24,
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gridTemplateRows: '1fr',
    gridAutoRows: 0,
    overflowY: 'hidden',
});
