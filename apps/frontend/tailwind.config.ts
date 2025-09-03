import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        // A subtle UniFi-like palette (adjust later as needed)
        primary: {
          DEFAULT: '#16a34a',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#475569'
        },
        background: '#ffffff',
        foreground: '#0f172a'
      },
      borderRadius: {
        lg: '10px',
        md: '8px',
        sm: '6px'
      }
    }
  },
  plugins: []
} satisfies Config

