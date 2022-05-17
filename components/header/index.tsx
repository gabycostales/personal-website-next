import Link from 'next/link';

import {
  ThemeAccentColorToggle,
  ThemeColorModeToggle,
} from './theme-color-managers';
import styles from './Header.module.css';

const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a
          className={`${styles.logo} box-highlight light-mode-bg`}
          aria-label="Home Button"
        >
          <span>gcc</span>
        </a>
      </Link>
      <div className={styles.toggles}>
        <Link href="/resume" passHref>
          <a className={styles.link}>resume</a>
        </Link>
        <ThemeAccentColorToggle />
        <ThemeColorModeToggle />
      </div>
    </header>
  );
};

export default SiteHeader;
