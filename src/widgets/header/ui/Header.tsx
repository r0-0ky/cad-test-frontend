'use client'

import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import Link from 'next/link';
import { ContactButton } from '@/src/shared/ui/contact-button';
import { useRouter } from 'next/navigation';

export const Header: React.FC = () => {
  const router = useRouter();
  const handleContactButtonClick = () => {
    router.push('/contact')
  }

  return (
    <header {...stylex.props(styles.header)}>
      <Link {...stylex.props(styles.logo)} href={'/'}>Some Company</Link>
      <ContactButton value='Contact us' handleClick={handleContactButtonClick}/>
    </header>
  )
}