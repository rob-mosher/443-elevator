import { Config as TConfig } from 'tailwindcss'

const config: TConfig = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
