import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-work)'],
        serif: ['var(--font-sentient)']
      },
      colors: {
        magenta: {
          bright: '#FFC5FF',
          DEFAULT: '#FF40FF',
          dark: '#CC00CC'
        },
        bright: '#FFF7FF',
        grey: {
          bright: '#F2E6F2',
          DEFAULT: '#AB93AB',
          dark: '#594759'
        },
        dark: '#1A001A'
      }
    }
  },
  plugins: []
}
export default config
