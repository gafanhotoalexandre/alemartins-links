/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/assets/bg-desktop.jpg')",
        mobile: "url('/assets/bg-mobile.jpg')",
        'desktop-light': "url('/assets/bg-desktop-light.jpg')",
        'mobile-light': "url('/assets/bg-mobile-light.jpg')",
        'moon-stars': "url('/assets/moon-stars.svg')",
        sun: "url('/assets/sun.svg')",
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        stroke: 'rgba(255, 255, 255, .5)',
        surface: 'rgba(255, 255, 255, .1)',
        'surface-hover': 'rgba(255, 255, 255, .05)',
        highlight: 'rgba(255, 255, 255, .2)',
        'stroke-light': 'rgba(0, 0, 0, .5)',
        'surface-light': 'rgba(0, 0, 0, 0.05)',
        'surface-hover-light': 'rgba(0, 0, 0, .02)',
        'highlight-light': 'rgba(0, 0, 0, .1)',
      },
    },
  },
  plugins: [],
}
