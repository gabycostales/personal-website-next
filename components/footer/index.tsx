import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalLink from '../ExternalLink';
import styles from './Footer.module.css';

type SocialMedia = {
  icon: IconDefinition;
  href: string;
};

const MySocialMedia: SocialMedia[] = [
  {
    icon: faLinkedinIn,
    href: 'https://www.linkedin.com/in/gabrielacostales/',
  },
  {
    icon: faGithub,
    href: 'https://github.com/gabycostales',
  },
  {
    icon: faEnvelope,
    href: 'mailto:gabycostales@gmail.com',
  },
];

const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <span>© 2021, Gabriela Costales</span>
      </div>
      <div className={styles.social}>
        {MySocialMedia.map(({ icon, href }) => {
          return (
            <ExternalLink href={href} key={href}>
              <FontAwesomeIcon icon={icon} />
            </ExternalLink>
          );
        })}
      </div>
    </footer>
  );
};

export default SiteFooter;
