import { styled } from 'ui/styles/theme';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const AvatarStyled = styled(AvatarPrimitive.Root, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: 48,
    height: 48,
    borderRadius: '100%',
    backgroundColor: '$slate7',

    variants: {
        size: {
            xs: {
                width: 16,
                height: 16,
            },
            sm: {
                width: 24,
                height: 24,
            },
            md: {
                width: 28,
                height: 28,
            },
            lg: {
                width: 40,
                height: 40,
            },
            xl: {
                width: 48,
                height: 48,
            },
        },
    },
});

export const ImageStyled = styled(AvatarPrimitive.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
});

export const FallbackStyled = styled(AvatarPrimitive.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'inherit',
    color: 'white',
});
