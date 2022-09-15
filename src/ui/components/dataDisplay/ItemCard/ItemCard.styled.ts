import { whiteA } from '@radix-ui/colors';
import { Link } from 'react-router-dom';
import { styled } from 'ui/styles/theme';

export const Wrapper = styled(Link, {
    display: 'inline-block',
    p: 2,
    backgroundColor: whiteA.whiteA3,
    transitionProperty: 'background-color',
    transitionDuration: '.3s',
    borderRadius: 8,

    div: {
        position: 'relative',
        transitionDuration: 'inherit',
        mb: 1,
    },

    img: {
        borderRadius: 4,
        width: '100%',
    },

    h6: {
        fontSize: '1rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        mb: 0.5,
    },

    span: {
        display: 'block',
        fontSize: 14,
        color: '$slate11',
        lineHeight: 1.6,
    },

    button: {
        position: 'absolute',
        right: 8,
        bottom: 8,
        opacity: 0,
        transform: 'translateY(10%)',
        transitionProperty: 'opacity, transform',
        transitionDuration: 'inherit',
    },

    '&:hover': {
        backgroundColor: whiteA.whiteA5,

        button: {
            opacity: 1,
            transform: 'none',
        },
    },
});

export const ClampText = styled('div', {
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});
