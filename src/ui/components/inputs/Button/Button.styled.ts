import { styled } from 'ui/styles/theme';

export const ButtonStyled = styled('button', {
    display: 'inline-flex',
    gap: 16,
    alignItems: 'center',
    px: 2,
    py: 1,
    borderRadius: 4,
    backgroundColor: '$main',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$mainLight',
    },

    variants: {
        shape: {
            circular: {
                borderRadius: '100%',
                aspectRatio: '1',
                p: 1,
            },
        },
        color: {
            main: {
                backgroundColor: '$main',
            },
            dark: {
                backgroundColor: '$slate1',
                color: 'white',

                '&:hover': {
                    backgroundColor: '$slate2',
                },
            },
        },
    },
});
