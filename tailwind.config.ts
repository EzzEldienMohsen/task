import { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'], // Add your custom font family
      },
    },
    colors: {
      darkBlue: '#0C1844',
      beige: '#FFF5E1',
      Border700: '#374151',
    },
  },
  plugins: [daisyui, typography],
};

export default config;
