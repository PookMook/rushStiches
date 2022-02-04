import { createStitches } from '@stitches/react';

function calculateScale(
  step: number,
  unit = 'rem',
  baseScale = 1.618,
  halfStep = true
): string {
  const effectiveStep = halfStep ? baseScale ** 0.5 : baseScale;
  return effectiveStep ** step + unit;
}

const stitches = createStitches({
  theme: {
    colors: {
      red: 'red',
    },
    radii: {
      normal: '7px',
      pill: '999999px',
    },
    fontSizes: {
      minus3: calculateScale(-3),
      minus2: calculateScale(-2),
      minus1: calculateScale(-1),
      plus0: calculateScale(0),
      plus1: calculateScale(1),
      plus2: calculateScale(2),
      plus3: calculateScale(3),
      plus4: calculateScale(4),
    },
    fonts: {
      circular: 'Circular-Book, Arial, sans-serif',
      medium: 'Circular-Medium, Arial, sans-serif',
      black: 'Circular-Black, Arial Black, sans-serif',
    },
  },
});

type Stiches = typeof stitches;

export const {
  styled,
  theme,
  getCssText,
  globalCss,
  createTheme,
  keyframes,
  config,
} = stitches as Stiches;

export const darkTheme = createTheme({
  colors: {
    red: 'blue',
  },
});

export const globalStyles = globalCss({
  'html,body': {
    margin: 0,
    padding: 0,
    backgroundColor: '$appBackground',
  },
  body: {
    overflowY: 'scroll',
  },
  '*': {
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: '$fonts$circular',
  },
});
