import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const ContactPage: React.FC = () => {
  return (
    <main {...stylex.props(styles.main)}>
      <h1>Contact Page</h1>
    </main>
  )
}