import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  main: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
    minHeight: '100vh'
  },
  title: {
    textAlign: 'center',
    fontSize: {
      default: 34,
      '@media (min-width: 434px) and (max-width: 600px)': 40,
      '@media (min-width: 600px)': 50,
    },
    fontWeight: 600,
    margin: '0 0 30px 0'
  },
  wrapper: {
    padding: '40px 20px'
  }
});