import { styled } from '../theme';

export const MainGrid = styled('div', {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: '"sidebar header" "sidebar main" "controls controls" ',

    '& > main': {
        overflowY: 'auto',
        mt: -8,
    },

    '& > main > :first-child': {
        '--pt': '32px',
        paddingTop: 'calc(var(--pt) + 64px)',
    },
});
