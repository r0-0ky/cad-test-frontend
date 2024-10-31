import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: {
      default: '15px 10px',
      '@media (min-width: 420px) and (max-width: 600px)': '40px 10px',
      '@media (min-width: 600px)': '60px 10px',
    },
    borderTop: '1px solid #d9d9d9',
  },
  footerText: {
    fontSize: {
      default: 18,
      '@media (min-width: 420px) and (max-width: 600px)': 20,
      '@media (min-width: 600px)': 26,
    },
    fontWeight: 600,
  }
});