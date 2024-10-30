import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ inputType = 'text', labelValue }) => {
  return (
    <>
      <label {...stylex.props(styles.label)}>{labelValue && labelValue}
        <input {...stylex.props(styles.input)} type={inputType} />
      </label>
    </>
  )
}
