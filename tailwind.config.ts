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
                dark: {
                    primary: '#D0BCFF',
                    onprimary: '#381E72',
                    primarycontainer: '#4F378B',
                    onprimarycontainer: '#EADDFF',
                    secondary: '#CCC2DC',
                    onsecondary: '#332D41',
                    secondarycontainer: '#4A4458',
                    onsecondarycontainer: '#E8DEF8',
                    tertiary: '#EFB8C8',
                    ontertiary: '#492532',
                    tertiarycontainer: '#633B48',
                    ontertiarycontainer: '#FFD8E4',
                    error: '#F2B8B5',
                    onerror: '#601410',
                    errorcontainer: '#8C1D18',
                    onerrorcontainer: '#F9DEDC',
                    surface: '#141218',
                    onsurface: '#E6E0E9',
                    surfacevariant: '#49454F',
                    onsurfacevariant: '#CAC4D0',
                    surfacecontainerhighest: '#36343B',
                    surfacecontainerhigh: '#2B2930',
                    surfacecontainer: '#211F26',
                    surfacecontainerlow: '#1D1B20',
                    surfacecontainerlowest: '#0F0D13',
                    inversesurface: '#E6E0E9',
                    inverseonsurface: '#322F35',
                    surfacetint: '#D0BCFF',
                },
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
