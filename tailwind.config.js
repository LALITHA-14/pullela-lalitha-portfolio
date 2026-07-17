/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A1120',
        surface: '#121B2E',
        surface2: '#182338',
        line: '#233047',
        ink: '#E7EEF7',
        muted: '#8CA0BC',
        signal: '#2DD9C6',
        amber: '#F5A623',
        rose: '#FF6B6B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(45,217,198,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,217,198,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
}
