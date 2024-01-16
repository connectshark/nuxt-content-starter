/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'pages/**/*.vue',
    'content/**/**.md',
    'layouts/**/*.vue',
    'components/**/**.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
      },
      fontFamily: {
        'noto': ['Merriweather', 'Noto Sans TC', 'sans-serif']
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
