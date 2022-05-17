import type { NextPage } from 'next';
import Link from 'next/link';

import ExternalLink from '../components/ExternalLink';
import PageTitle from '../components/page-title';
import { useColorScheme } from '../hooks/theme';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { isLightMode } = useColorScheme();

  return (
    <main className="main-container">
      <section className={styles.title}>
        <PageTitle title="gaby carmen costales" />
        <span className={`${styles.subtitle} box-highlight light-mode-bg`}>
          yup, my initials are a compiler
        </span>
      </section>

      <section
        className={`${styles.content} light-mode-bg ${
          isLightMode && 'box-highlight'
        }`}
      >
        <p className={styles.welcome}>
          <b>Hi!</b> Welcome to my website. <span className="wave">👋🏼</span>
        </p>

        <p className={styles.shortBio}>
          I{"'"}m a senior software engineer born and raised in Miami, FL 🌴.
          Coding is my craft and I love building things that are useful to other
          people with emerging web technologies. I currently work for{' '}
          <ExternalLink href="https://www.swarmsolutions.com/">
            Swarm Solutions
          </ExternalLink>
          .
        </p>

        <p>
          I justed finished rebuilding this site with{' '}
          <ExternalLink href="https://www.nextjs.org">Next.js</ExternalLink> and
          I plan to add more to it soon, but in the meantime check out my{' '}
          <Link href="/resume">resume</Link>!
        </p>
      </section>
    </main>
  );
};

export default Home;
