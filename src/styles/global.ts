import { globalCss } from ".";

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialised'
    },
    'body, input, textarea, button': {
        fontFamily: roboto.style.fontFamily,
        fontWeight: 400
    }
})