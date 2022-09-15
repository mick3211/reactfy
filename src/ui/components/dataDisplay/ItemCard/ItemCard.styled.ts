import { whiteA } from '@radix-ui/colors';
import { Link } from 'react-router-dom';
import { styled } from 'ui/styles/theme';

export const Wrapper = styled(Link, {
    display: 'inline-block',
    maxWidth: 200,
    p: 1.5,
    backgroundColor: whiteA.whiteA3,
    transitionProperty: 'background-color',
    transitionDuration: '.3s',
    borderRadius: 8,
    position: 'relative',

    img: {
        borderRadius: 4,
        width: '100%',
        mb: 1,
    },

    h6: {
        fontSize: 16,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',

        mb: 0.5,
    },

    span: {
        display: 'block',
        fontSize: 14,
        color: '$slate11',
        maxHeight: '2.6em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

    button: {
        position: 'absolute',
        right: 16,
        top: '50%',
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
