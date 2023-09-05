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
        'color-primary': "#f8ac39",
        'color-secundary-1': "#da9122",
        'color-secundary-2': "#fbcd58",
        'backing-color-1': "#53a9f3",
        'backing-color-2': "#a37a3e",
        'backing-color-3': "#d9acc4",
        'backing-color-4': "#fae4a2",
        'scale-gray-1': "#ffffff",
        'scale-gray-2': "#f3f3f3",
        'scale-gray-3': "#e0e0e0",
        'scale-gray-4': "#bdbdbd",
        'scale-gray-5': "#828282",
        'scale-gray-6': "#4f4f4f",
        'scale-gray-7': "#333333",
        'scale-gray-8': "#000",

        'brown-primary': "#dda29a",
        'brown-secundary': '#560000',
        'brown-hover': '#be857d',
        'backgound-body': '#ffe6d9',
        'gray-100': "#e1e1e1",
        'gray-200': "#efeff6"
      },
      fontFamily: {
        'font-montserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
}
export default config
