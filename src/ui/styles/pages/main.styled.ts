import { styled } from '../theme';

export const MainGrid = styled('div', {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto 1fr 128px',
    gridTemplateAreas: '"sidebar header" "sidebar main" "controls controls" ',

    '& > main': {
        overflowY: 'auto',
    },
});
