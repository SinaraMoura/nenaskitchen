import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brown-primary': "#dda29a",
        'brown-secundary': '#560000',
        'brown-hover': '#be857d',
        'backgound-body': '#ffe6d9',
        'gray-100': "#e1e1e1",
        'gray-200': "#efeff6"
      }
    },
  },
  plugins: [],
}
export default config
