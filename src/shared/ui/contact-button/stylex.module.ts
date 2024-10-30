import * as stylex from '@stylexjs/stylex';
import { inherits } from 'util';

export const styles = stylex.create({
  button: {
    border: 0,  
    background: '#2c2c2c',
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