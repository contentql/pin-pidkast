import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/payload/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'grayscale-pulse': 'grayscale-pulse 3s ease-in-out forwards',
      },
      keyframes: {
        'grayscale-pulse': {
          '0%': { filter: 'grayscale(0%)' },
          '100%': { filter: 'grayscale(100%)' },
        },
      },
    },
    //   colors: {
    //     primary: 'hsl(var(--primary))',
    //     text: 'hsl(var(--text))',
    //     secondary: 'hsl(var(--secondary))',
    //     background: 'hsl(var(--background))',
    //     card: 'hsl(var(--card))',
    //     input: 'hsl(var(--input))',
    //     transparent: 'transparent',
    //     info: {
    //       DEFAULT: 'hsl(var(--info))',
    //       foreground: 'hsl(var(--info-foreground))',
    //     },
    //     warning: {
    //       DEFAULT: 'hsl(var(--warning))',
    //       foreground: 'hsl(var(--warning-foreground))',
    //     },
    //     danger: {
    //       DEFAULT: 'hsl(var(--danger))',
    //       foreground: 'hsl(var(--danger-foreground))',
    //     },
    //     success: {
    //       DEFAULT: 'hsl(var(--success))',
    //       foreground: 'hsl(var(--success-foreground))',
    //     },
    //   },
    // fontSize: {
    //   DEFAULT: '30rem',
    //   sm: ['1.4rem', '1.8rem'],
    //   base: ['1.6rem', '1.9rem'],
    //   lg: ['2.4rem', '2.8rem'],
    //   xl: ['3.9rem', '1'],
    // },
    //   borderRadius: {
    //     none: '0',
    //     DEFAULT: '0.4rem',
    //     md: '0.8rem',
    //     full: '9999px',
    //   },
    //   spacing: {
    //     0: '0',
    //     2: '0.2rem',
    //     4: '0.4rem',
    //     8: '0.8rem',
    //     12: '1.2rem',
    //     16: '1.6rem',
    //     20: '2rem',
    //     24: '2.4rem',
    //     28: '2.8rem',
    //     32: '3.2rem',
    //     36: '3.6rem',
    //     40: '4rem',
    //     44: '4.4rem',
    //     48: '4.8rem',
    //     52: '5.2rem',
    //     56: '5.6rem',
    //     60: '6rem',
    //     64: '6.4rem',
    //     80: '8rem',
    //     128: '12.8rem',
    //     256: '25.6rem',
    //     320: '32rem',
    //   },
    //   maxWidth: {
    //     xs: '32rem', // 320px
    //     sm: '38.4rem', // 384px
    //     md: '44.8rem', // 448px
    //     lg: '51.2rem', // 512px
    //     xl: '57.6rem', // 576px
    //     '2xl': '67.2rem', // 672px
    //     '3xl': '76.8rem', // 768px
    //     '4xl': '89.6rem', // 896px
    //     '5xl': '102.4rem', // 1024px
    //     '6xl': '115.2rem', // 1152px
    //     '7xl': '128rem', // 1280px
    //   },
  },
  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: '#7248E6',
          secondary: '#F4F4F5',
          'base-content': '#18181B',
          'neutral-content': '#52525B',
          'base-100': '#FAFAFA',
          info: '#0000ff',
          success: '#00ff00',
          warning: '#FFDEBE',
          error: '#E56000',
          'secondary-content': '#71717A',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

export default config
