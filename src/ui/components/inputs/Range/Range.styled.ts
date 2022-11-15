import { styled } from 'ui/styles/theme';

export const Progress = styled('div', {
    width: 'var(--value)',
    height: '100%',
    borderRadius: 'inherit',
    backgroundColor: '$slate12',
    // transition: 'width 0.2s',
    position: 'relative',

    '&:after': {
        content: '',
        width: 12,
        height: 12,
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translate(50%, -50%)',
        backgroundColor: 'white',
        borderRadius: '100%',
        opacity: 0,
    },
});

export const RangeWrapper = styled('span', {
    display: 'inline-block',
    width: 'var(--width)',
    maxWidth: 'var(--max-width)',
    height: 4,
    backgroundColor: '$slate4',
    borderRadius: 12,
    position: 'relative',

    input: {
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        width: '100%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        opacity: 0,
    },

    [`&:hover ${Progress}`]: {
        backgroundColor: '$main',
    },

    [`&:hover ${Progress}::after`]: {
        opacity: 1,
    },
});
