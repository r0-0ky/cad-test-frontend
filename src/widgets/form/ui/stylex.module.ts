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
    height: {
      default: 35,
      '@media (min-width: 600px)': 40,
    },
    boxShadow: 'none',
    fontSize: {
      default: 16,
      '@media (min-width: 420px) and (max-width: 600px)': 18,
      '@media (min-width: 600px)': 20,
    },
  },
  input: {
    outline: 'none',
    background: {
      ':focus': '#f1f1f1'
    },
    boxShadow: {
      ':focus': 'none'
    }
  }
});