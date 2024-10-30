'use client';

import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { ContactButton } from '@/src/shared/ui/contact-button';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export const MainPage: React.FC = () => {
  const router = useRouter();
  
  const articles = Array(6).fill({
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
  });

  const handleContactButtonClick = () => {
    router.push('/contact')
  }

  return (
    <main {...stylex.props(styles.main)}>
      <section {...stylex.props(styles.infoSection)}>
        <div {...stylex.props(styles.infoWrapper)}>
          <div {...stylex.props(styles.infoContainer)}>
            <h1 {...stylex.props(styles.infoSectionTitle)}>Most important title on the page</h1>
            <p {...stylex.props(styles.infoSectionText)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</p>
          </div>
          <div {...stylex.props(styles.video)}>
            <ReactPlayer width={'100%'} height={'100%'} url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' controls={true} />
          </div>
        </div>
      </section>
      <section {...stylex.props(styles.cardsSection)}>
        <h2 {...stylex.props(styles.cardsSectionTitle)}>Also very important title</h2>
        <div {...stylex.props(styles.cardsContainer)}>
          {articles.map((article, index) => (
            <article {...stylex.props(styles.card)} key={index}>
              <h3 {...stylex.props(styles.cardTitle)}>{article.title}</h3>
              <p {...stylex.props(styles.cardText)}>{article.text}</p>
            </article>
          ))}
        </div>
        <ContactButton value='Contact us' handleClick={handleContactButtonClick}/>
      </section>
      <section {...stylex.props(styles.contactSection)}>
          <h3 {...stylex.props(styles.contactSectionTitle)}>Less important title</h3>
          <ContactButton value='Contact us' handleClick={handleContactButtonClick}/>
      </section>
    </main>
  );
};