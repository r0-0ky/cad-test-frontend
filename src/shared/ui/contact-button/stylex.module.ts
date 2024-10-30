import * as stylex from '@stylexjs/stylex';
import { inherits } from 'util';

export const styles = stylex.create({
  button: {
    border: 0,  
    background: {
      default: '#2c2c2c',
      ':hover': '#2c2c2cee'
    },
    transition: 'all 0.3s',
    width: '177px',
    padding: '8px 0',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'inherits',
    fontSize: 18,
    cursor: 'pointer',
  }
});