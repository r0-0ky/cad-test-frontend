import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const Footer: React.FC = () => {
  return (
    <footer {...stylex.props(styles.footer)}>
      <p {...stylex.props(styles.footerText)}>Some Company 2024</p>
    </footer>
  )
}