import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalLink from '../ExternalLink';
import styles from './Footer.module.css';

type SocialMedia = {
  icon: IconDefinition;
  href: string;
  label: string;
};

const MySocialMedia: SocialMedia[] = [
  {
    icon: faLinkedinIn,
    href: 'https://www.linkedin.com/in/gabrielacostales/',
    label: 'LinkedIn',
  },
  {
    icon: faGithub,
    href: 'https://github.com/gabycostales',
    label: 'GitHub',
  },
  {
    icon: faEnvelope,
    href: 'mailto:gabycostales@gmail.com',
    label: 'Email',
  },
];

const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <span>© 2021, Gabriela Costales</span>
      </div>
      <div className={styles.social}>
        {MySocialMedia.map(({ icon, href, label }) => {
          return (
            <ExternalLink href={href} key={href} label={label}>
              <FontAwesomeIcon icon={icon} />
            </ExternalLink>
          );
        })}
      </div>
    </footer>
  );
};

export default SiteFooter;
