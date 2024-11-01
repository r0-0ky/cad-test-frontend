import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  main: {
    flex: '1 0 auto',
  },
  infoSection: {
    background: '#f5f5f5',
    padding: {
      default: '20px 20px 30px 20px',
      '@media (min-width: 400px) and (max-width: 600px)': '20px 30px 60px 30px',
      '@media (min-width: 600px)': '40px 60px 100px 60px',
    },
  },
  infoSectionTitle: {
    fontSize: {
      default: 34,
      '@media (min-width: 400px) and (max-width: 600px)': 40,
      '@media (min-width: 600px)': 50,
    },
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
    gap: {
      default: 20,
      '@media (min-width: 400px) and (max-width: 600px)': 20,
      '@media (min-width: 600px)': 30,
    },
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
    position: 'relative',
    flex: '1 0 auto',
    maxWidth: {
      default: 530,
      '@media (max-width: 1000px)': 450,
    },
    height: {
      default: 150,
      '@media (min-width: 400px) and (max-width: 600px)': 220,
      '@media (min-width: 600px)': 260,
    },
    background: '#d9d9d9',
    width: {
      '@media (max-width: 1000px)': '100%',
    }
  },

  cardsSection: {
    padding: {
      default: '30px 20px 40px 20px',
      '@media (min-width: 420px) and (max-width: 600px)': '50px 30px 40px 30px',
      '@media (min-width: 600px)': '60px 60px 40px 60px',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200,
    margin: '0 auto'
  },
  cardsSectionTitle: {
    fontSize: {
    default: 29,
    '@media (min-width: 420px) and (max-width: 600px)': 35,
    '@media (min-width: 600px)': 45,
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
      default: '1fr',
      '@media (min-width: 420px) and (max-width: 600px)': 'repeat(2, minmax(0, 270px))',
      '@media (min-width: 600px)': 'repeat(3, minmax(0, 270px))',
    },
    gap: {
      default: 24,
      '@media (min-width: 400px) and (max-width: 600px)': 30,
      '@media (min-width: 600px)': 50,
    },  
    margin: {
      default: '30px 0',
      '@media (min-width: 400px) and (max-width: 600px)': '50px 0 40px 0',
      '@media (min-width: 600px)': '80px 0 50px 0',
    },
  },

  contactSection: {
    background: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: {
      default: '40px 0',
      '@media (min-width: 420px) and (max-width: 600px)': '50px 0',
      '@media (min-width: 600px)': '80px 0',
    },
    gap: {
      default: 20,
      '@media (min-width: 420px) and (max-width: 600px)': 30,
      '@media (min-width: 600px)': 40,
    }
  },
  contactSectionTitle: {
    fontSize: {
      default: 29,
      '@media (min-width: 420px) and (max-width: 600px)': 35,
      '@media (min-width: 600px)': 45,
    },
    fontWeight: 600,
    margin: 0,
    textAlign: 'center',
  }
});