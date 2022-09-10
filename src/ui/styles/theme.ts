import { createStitches } from '@stitches/react';
import { slateDark, grass } from '@radix-ui/colors';

const { globalCss, theme, styled } = createStitches({
    theme: {
        colors: {
            ...slateDark,
            main: grass.grass9,
            mainLight: grass.grass8,
        },
    },

    utils: {
        m: (value: number) => ({
            margin: value * 8,
        }),
        mt: (value: number) => ({
            marginTop: value * 8,
        }),
        mr: (value: number) => ({
            marginRight: value * 8,
        }),
        mb: (value: number) => ({
            marginBottom: value * 8,
        }),
        ml: (value: number) => ({
            marginLeft: value * 8,
        }),
        mx: (value: number) => ({
            marginLeft: value * 8,
            marginRight: value * 8,
        }),
        my: (value: number) => ({
            marginTop: value * 8,
            marginBottom: value * 8,
        }),
        p: (value: number) => ({
            padding: value * 8,
        }),
        pt: (value: number) => ({
            paddingTop: value * 8,
        }),
        pr: (value: number) => ({
            paddingRight: value * 8,
        }),
        pb: (value: number) => ({
            paddingBottom: value * 8,
        }),
        pl: (value: number) => ({
            paddingLeft: value * 8,
        }),
        px: (value: number) => ({
            paddingLeft: value * 8,
            paddingRight: value * 8,
        }),
        py: (value: number) => ({
            paddingTop: value * 8,
            paddingBottom: value * 8,
        }),
    },
});

const globalStyles = globalCss({
    '@import':
        "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')",
    '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        textDecoration: 'none',
    },
    body: {
        backgroundColor: '$slate2',
        fontFamily: "'Inter', 'sans-serif'",
        color: 'white',
        userSelect: 'none',
    },
    /* width */
    '::-webkit-scrollbar': {
        width: 12,
    },

    /* Track */
    '::-webkit-scrollbar-track': {
        background: 'rgba(255, 255, 255, 0)',
    },

    /* Handle */
    '::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.2)',
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(255, 255, 255, 0.5)',
    },
});

export { styled, theme, globalStyles };
