import { whiteA } from '@radix-ui/colors';
import { styled } from 'ui/styles/theme';

export const TableRow = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'var(--grid-cols)',
    gridTemplateRows: 'auto',
    alignItems: 'center',
    gap: 16,
    borderRadius: 4,
    p: 1,

    '&:hover': {
        backgroundColor: whiteA.whiteA7,

        a: {
            color: 'white',
        },
    },

    a: {
        color: '$slate11',

        '&:hover': {
            color: 'white',
            textDecoration: 'underline',
        },
    },

    h5: {
        fontWeight: 400,
        fontSize: '1rem',
        color: 'white',
    },
});

export const TableContainer = styled('div', {
    '--grid-cols': 'repeat(auto-fit, auto)',

    [`& ${TableRow}:first-of-type`]: {
        backgroundColor: 'unset',
        borderBottom: `1px solid ${whiteA.whiteA5}`,
        borderRadius: 0,
        mb: 2,
        textTransform: 'uppercase',
        fontSize: '0.75rem',
    },
});

export const TableCell = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    fontSize: '0.875rem',
    color: '$slate11',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    variants: {
        align: {
            center: {
                textAlign: 'center',
                justifyContent: 'center',
            },
        },
    },
});
