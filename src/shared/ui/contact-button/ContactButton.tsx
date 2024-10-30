import { ContactButtonProps } from "./types"
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';

export const ContactButton: React.FC<ContactButtonProps> = ({ handleClick, value }) => {
  return (
    <button {...stylex.props(styles.button)} onClick={handleClick}>{value}</button>
  )
}