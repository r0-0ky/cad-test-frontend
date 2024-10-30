import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '35px 70px 35px 30px',
    borderBottom: '1px solid #d9d9d9',
  },
  logo: {
    textDecoration: 'none',
    fontSize: 26,
    fontWeight: 600,
    color: '#161616',
  }
});