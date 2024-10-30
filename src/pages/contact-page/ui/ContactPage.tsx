import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Form } from '@/src/widgets/form';

export const ContactPage: React.FC = () => {
  return (
    <main {...stylex.props(styles.main)}>
      <div>
        <h1 {...stylex.props(styles.title)}>Only CTA on the page</h1>
        <Form />
      </div>
    </main>
  )
}