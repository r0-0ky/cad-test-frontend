import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: {
      default: '10px 20px 10px 20px',
      '@media (min-width: 420px) and (max-width: 600px)': '25px 40px 25px 20px',
      '@media (min-width: 600px)': '30px 70px 30px 30px',
    },
    borderBottom: '1px solid #d9d9d9',
  },
  logo: {
    textDecoration: 'none',
    fontSize: {
      default: 16,
      '@media (min-width: 420px) and (max-width: 600px)': 20,
      '@media (min-width: 600px)': 26,
    },
    fontWeight: 600,
    color: '#161616',
  }
});