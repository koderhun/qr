/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {},
  plugins: [require('flowbite/plugin')],
  darkMode: 'media',
}

export default config
