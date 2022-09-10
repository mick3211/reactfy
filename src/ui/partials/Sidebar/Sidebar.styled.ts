import { styled } from 'ui/styles/theme';

export const SidebarContainer = styled('aside', {
    gridArea: 'sidebar',
    backgroundColor: 'black',
    resize: 'horizontal',
    overflow: 'hidden',
    minWidth: 'fit-content',
    px: 2,
    pt: 6,
    color: '$slate11',
    fontSize: 14,

    'a:hover': {
        color: '$slate12',
    },
});

export const NavList = styled('ul', {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 600,

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
    },
});
