/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: {
          dark: '#141414',
          card: '#1c1c1c',
          red: '#e52421',
          crimson: '#cc1a17',
          gray: '#999999',
          lightgray: '#cccccc',
          border: '#2a2a2a'
        }
      },
      fontFamily: {
        masthead: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Oswald"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}