import { styled } from 'ui/styles/theme';

export const InputStyled = styled('input', {
    py: 1.5,
    px: 3,
    borderRadius: 24,
    border: 'none',
    backgroundColor: '$slate4',
    color: 'white',

    '&:hover': {
        backgroundColor: '$slate5',
    },

    '&:focus': {
        outline: 'none',
        backgroundColor: '$slate6',
    },
});

export const IconLabel = styled('label', {
    position: 'absolute',
    left: 8,
    top: '50%',
    transform: 'translateY(-50%)',
});
