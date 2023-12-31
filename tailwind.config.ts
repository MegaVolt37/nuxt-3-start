import { pxToRemPair } from "@captaincss/captaincss/helpers"
// const { pxToRemPair } = require('@captaincss/captaincss/helpers')
import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif']
      },
      colors: {
        black_100: '#070707',
        black_200: '#1E1E1E',
        black_300: '#1E1E1E',
        dark_black_100: '#FCFCFC',
        stroke_100: '#E2E1E3',
        dark_stroke_100: '#555555',
        white_100: '#FCFCFC',
        white_200: '#FFFFFF',
        dark_white_100: '#323232',
        blue_100: '#76D4CF',
        blue_200: '#34AFA8',
        blue_300: '#3B7373',
        dark_blue_100: '#2EDDD3',
        gray_100: '#292929',
        gray_200: '#6D6D6D',
      },
      fontSize: {
        ...pxToRemPair(12),
        ...pxToRemPair(16),
        ...pxToRemPair(18),
        ...pxToRemPair(20),
        ...pxToRemPair(24),
        ...pxToRemPair(34),
        ...pxToRemPair(40),
        ...pxToRemPair(42),
        ...pxToRemPair(56),
        ...pxToRemPair(72),
        ...pxToRemPair(90),
      },
      width: {
        ...pxToRemPair(8),
        ...pxToRemPair(16),
        ...pxToRemPair(32),
        ...pxToRemPair(150),
        ...pxToRemPair(320),
        ...pxToRemPair(360),
      },
      maxWidth: {
        ...pxToRemPair(150),
        ...pxToRemPair(167),
        ...pxToRemPair(285),
        ...pxToRemPair(566),
        ...pxToRemPair(720),
        ...pxToRemPair(895),
        ...pxToRemPair(1200),
        ...pxToRemPair(1240),
      },
      minWidth: {
        ...pxToRemPair(140),
      },
      height: {
        ...pxToRemPair(1),
        ...pxToRemPair(30),
        ...pxToRemPair(32),
        ...pxToRemPair(46),
        ...pxToRemPair(285),
      },
      maxHeight: {
        ...pxToRemPair(285),
        ...pxToRemPair(320),
        ...pxToRemPair(360),
        ...pxToRemPair(560),
      },
      padding: {
        ...pxToRemPair(12),
        ...pxToRemPair(16),
        ...pxToRemPair(20),
        ...pxToRemPair(24),
        ...pxToRemPair(32),
        ...pxToRemPair(40),
        ...pxToRemPair(80),
      },
      margin: {
        ...pxToRemPair(8),
        ...pxToRemPair(12),
        ...pxToRemPair(16),
        ...pxToRemPair(20),
        ...pxToRemPair(32),
        ...pxToRemPair(40),
        ...pxToRemPair(48),
        ...pxToRemPair(63),
        ...pxToRemPair(64),
        ...pxToRemPair(80),
        ...pxToRemPair(120),
      },
      spacing: {
        ...pxToRemPair(8),
        ...pxToRemPair(10),
        ...pxToRemPair(16),
        ...pxToRemPair(18),
        ...pxToRemPair(20),
        ...pxToRemPair(24),
        ...pxToRemPair(40),
        ...pxToRemPair(42),
        ...pxToRemPair(60),
        ...pxToRemPair(80),
      },
      gridTemplateColumns: {
        'header': 'auto auto auto',
        'autofit': 'repeat(auto-fit,minmax(0, 1fr))',
      },
      lineHeight: {
        ...pxToRemPair(20),
        ...pxToRemPair(22),
        ...pxToRemPair(25),
        ...pxToRemPair(28),
        ...pxToRemPair(30),
        ...pxToRemPair(33),
        ...pxToRemPair(44),
        ...pxToRemPair(56),
        ...pxToRemPair(64),
        ...pxToRemPair(90),
      },
    },

    padding: {

    },
    container: {
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1240px',
        'xl': '1240px',
        '2xl': '1240px',
      },
    },
    backgroundImage: {
      'bg_home': 'url("~/assets/images/bg_home.jpg")',
      'bg_form': 'url("~/assets/images/bg_form.jpg")',
    }
  },
  plugins: [],
}