import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { CustomForm } from '@/src/widgets/form';

export const ContactPage: React.FC = () => {
  return (
    <main {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.wrapper)}>
        <h1 {...stylex.props(styles.title)}>Only CTA on the page</h1>
        <CustomForm />
      </div>
    </main>
  )
}