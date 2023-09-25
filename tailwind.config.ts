import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Burbank Big Condensed Bold']
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
        '40': '160px',
        '48': '192px',
      },
      colors: {
        blue: {
          '600': '#0866B0',
        },
        cyan: {
          '400': '#46CAE9'
        },
        yellow: {
          '200': '#FEFF04',
          '400': '#F5E401'
        },
        grey: {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
          '950': '#030712',
        },
        white: '#FFFFFF',
        black: '#000000',
      },
      backgroundImage: {
        'bonus-bg': 'url("/Rectangle 1135.svg")',
        'button-hover-bg': 'url("/Rectangle 1147.svg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '95%': '95%',
        '16': '4rem',
      }
    },
  },
  plugins: [
    forms,
    aspectRatio,
    typography,
  ],
}
export default config
