import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  form: {
    maxWidth: 320,
    border: '1px solid #d9d9d9',
    borderRadius: 8,
    padding: 20,
    boxSizing: 'border-box',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  }
});