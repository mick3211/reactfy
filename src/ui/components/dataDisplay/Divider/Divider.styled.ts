import { styled } from 'ui/styles/theme';
import * as Separator from '@radix-ui/react-separator';

export const DividerStyled = styled(Separator.Root, {
    backgroundColor: '$slate5',
    '&[data-orientation=horizontal]': { height: 1, width: '100%' },
    '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
