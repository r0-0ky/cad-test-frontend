import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  form: {
    boxSizing: 'border-box',
    maxWidth: 320,
    border: '1px solid #d9d9d9',
    borderRadius: 8,
    background: '#fff',
  },
  formButton: {
    height: 40,
    boxShadow: 'none',
    fontSize: 20,
  }
});