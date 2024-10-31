import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  main: {
    flex: '1 0 auto',
  },
  infoSection: {
    background: '#f5f5f5',
    padding: '40px 60px 100px 60px',
  },
  infoSectionTitle: {
    fontSize: 50,
    fontWeight: 600,
    margin: 0,
    textAlign: {
      '@media (max-width: 1000px)': 'center',
    }
  },
  infoSectionText: {
    fontSize: 16,
    margin: 0,
    textAlign: {
      '@media (max-width: 1000px)': 'center',
    }
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    maxWidth: 360,
    flex: '0 0 auto',
  },
  infoWrapper: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    gap: 30,
    flexDirection: {
      '@media (max-width: 1000px)': 'column',
    },
    alignItems: {
      '@media (max-width: 1000px)': 'center',
    }
  },
  video: {
    flex: '1 0 auto',
    maxWidth: {
      default: 530,
      '@media (max-width: 1000px)': 450,
    },
    height: 260,
    background: '#d9d9d9',
    width: {
      '@media (max-width: 1000px)': '100%',
    }
  },

  cardsSection: {
    padding: '60px 60px 40px 60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200,
    margin: '0 auto'
  },
  cardsSectionTitle: {
    fontSize: {
      default: 45,
      '@media (max-width: 800px)': 35
    },
    fontWeight: 600,
    margin: 0,
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 600,
    margin: 0
  },
  cardText: {
    margin: 0,
    color: '#6b6b6b'
  },
  cardsContainer: {
    width: '100%',
    display: 'grid',
    gridAutoFlow: 'row',
    justifyContent: 'space-between',
    gridTemplateColumns: {
      default: 'repeat(3, minmax(0, 270px))',
      '@media (max-width: 800px)': 'repeat(2, minmax(0, 270px))',
    },
    gap: 50,
    margin: '80px 0 50px 0'
  },

  contactSection: {
    background: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 0',
    gap: 40

  },
  contactSectionTitle: {
    fontSize: 45,
    fontWeight: 600,
    margin: 0,
    textAlign: 'center',
  }
});