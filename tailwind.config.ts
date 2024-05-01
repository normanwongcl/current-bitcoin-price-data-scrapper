import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width margin',
        height: 'height',
        bg: 'background-color',
        display: 'display opacity',
        visibility: 'visibility',
        padding: 'padding-top padding-right padding-bottom padding-left',
      },
      colors: {
        grey: {
          0: '#FFFFFF',
          5: '#F9FAFB',
          10: '#F3F4F6',
          20: '#E5E7EB',
          30: '#D1D5DB',
          40: '#9CA3AF',
          50: '#6B7280',
          60: '#4B5563',
          70: '#374151',
          80: '#1F2937',
          90: '#111827',
        },
      },
      borderRadius: {
        none: '0px',
        soft: '2px',
        base: '4px',
        rounded: '8px',
        large: '16px',
        circle: '9999px',
      },
      maxWidth: {
        '8xl': '100rem',
      },
      screens: {
        '2xsmall': '320px',
        xsmall: '512px',
        small: '1024px',
        medium: '1280px',
        large: '1440px',
        xlarge: '1680px',
        '2xlarge': '1920px',
      },
      fontSize: {
        '3xl': '2rem',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Ubuntu',
          'sans-serif',
        ],
      },
      keyframes: {
        ring: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-top': {
          '0%': {
            height: '100%',
          },
          '99%': {
            height: '0',
          },
          '100%': {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
