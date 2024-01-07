import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                dprimary: {
                    100: '#D0BCFF',
                    200: '#381E72',
                },
                dprimarycontainer: {
                    100: '#4F378B',
                    200: '#EADDFF',
                },
                dsecondary: {
                    100: '#CCC2DC',
                    200: '#332D41',
                },
                dsecondarycontainer: {
                    100: '#4A4458',
                    200: '#E8DEF8',
                },
                dtertiary: {
                    100: '#EFB8C8',
                    200: '#492532',
                },
                dtertiarycontainer: {
                    100: '#633B48',
                    200: '#FFD8E4',
                },
                dsurface: {
                    100: '#141218',
                    200: '#E6E0E9',
                },
                dsurface2: {
                    100: '#49454F',
                    200: '#CAC4D0',
                },
                dsurfacecontainer: {
                    100: '#36343B',
                    200: '#2B2930',
                    300: '#211F26',
                    400: '#1D1B20',
                    500: '#0F0D13',
                },
                dsurfacetint: '#D0BCFF',
            },
            margin: {
                '10vh': '10vh',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}

export default config
