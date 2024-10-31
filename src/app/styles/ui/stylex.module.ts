import * as stylex from '@stylexjs/stylex';

export const uiStyles = stylex.create({
  button: {
    width: {
      default: 100,
      '@media (min-width: 420px) and (max-width: 600px)': 120,
      '@media (min-width: 600px)': 177,
    },
    height: {
      default: 25,
      '@media (min-width: 420px) and (max-width: 600px)': 30,
      '@media (min-width: 600px)': 32,
    },
    fontSize: {
      default: 14,
      '@media (min-width: 420px) and (max-width: 600px)': 16,
      '@media (min-width: 600px)': 18,
    },
    boxShadow: 'none',
  }
});