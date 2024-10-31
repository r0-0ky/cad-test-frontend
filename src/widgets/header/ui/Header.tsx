'use client'

import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { uiStyles } from '@/src/app/styles/ui/stylex.module';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';

export const Header: React.FC = () => {
  const router = useRouter();
  const handleContactButtonClick = () => {
    router.push('/contact')
  }

  return (
    <header {...stylex.props(styles.header)}>
      <Link {...stylex.props(styles.logo)} href={'/'}>Some Company</Link>
      <Button {...stylex.props(uiStyles.button)} color='primary' variant='solid' onClick={handleContactButtonClick}>Contact us</Button>
    </header>
  )
}