import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Input } from '@/src/shared/ui/input';

export const Form: React.FC = () => {
  return (
    <form {...stylex.props(styles.form)} action="POST">
      <Input labelValue='Name' />
      <Input labelValue='Email' />
    </form>
  )
}