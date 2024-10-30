import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  main: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: 600,
    margin: 0
  }
});