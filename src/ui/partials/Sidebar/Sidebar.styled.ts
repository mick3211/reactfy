import { styled } from 'ui/styles/theme';

export const SidebarContainer = styled('aside', {
    gridArea: 'sidebar',
    backgroundColor: 'black',
    resize: 'horizontal',
    overflow: 'hidden',
    minWidth: 'fit-content',
    p: 2,
    color: '$slate11',
    fontSize: 14,

    'a:hover': {
        color: '$slate12',
    },

    ul: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
    },
});

export const NavList = styled('ul', {
    fontWeight: 700,
    mt: 2,

    '& > li > a': {
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        color: 'inherit',
        py: 1.5,

        svg: {
            width: 20,
            height: 20,
        },

        '&.active': {
            color: 'white',
        },
    },
});

export const PlaylistsWrapper = styled('ul', {
    overflowY: 'auto',

    '& > li > a': {
        display: 'block',
        color: 'inherit',
        py: 1,
    },
});
