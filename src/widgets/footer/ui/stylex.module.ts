import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 10px',
    borderTop: '1px solid #d9d9d9',
  },
  footerText: {
    fontSize: 26,
    fontWeight: 600,
  }
});