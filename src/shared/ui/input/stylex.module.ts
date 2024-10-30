import * as stylex from '@stylexjs/stylex';
import { inherits } from 'util';

export const styles = stylex.create({
  input: {
    border: '1px solid #d9d9d9',
    borderRadius: 8,
    outline: 'none',
    width: '100%',
    '::placeholder': {
      color: '#d9d9d9'
    },
    padding: '10px 15px',
    background: {
      default: '#fff',
      ':focus': '#ececec'
    },
    boxSizing: 'border-box',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    alignItems: 'start'
  }
});