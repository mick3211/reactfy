import { styled } from 'ui/styles/theme';
import * as Popover from '@radix-ui/react-popover';

export const TriggerStyled = styled(Popover.Trigger, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontWeight: 600,
    color: 'white',
    backgroundColor: 'black',
    pr: 1,
    borderRadius: 16,
    border: '2px solid black',
    cursor: 'pointer',

    '&:hover, &[data-state=open]': {
        backgroundColor: '$slate3',
        borderColor: '$slate3',
    },

    '& > svg': {
        transition: 'transform .2s',
    },

    '&[data-state=open] > svg': {
        transform: 'rotate(180deg)',
    },
});

export const ContentStyled = styled(Popover.Content, {
    backgroundColor: '$slate3',
    borderRadius: 4,
    minWidth: 220,
    userSelect: 'none',

    '& > ul': {
        listStyleType: 'none',
        p: 0.5,
        fontSize: 14,
    },

    '& > ul > li': {
        p: 1.5,
        borderRadius: 4,
    },

    '& > ul > li:hover': {
        backgroundColor: '$slate6',
    },
});
