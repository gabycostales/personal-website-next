import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalLink from '../ExternalLink';

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
    <footer className="flex justify-between items-center py-7 px-2 xsTablet:px-7">
      <div>
        <span className="text-xs smMobile:text-sm lgMobile:text-base">
          © 2021, Gabriela Costales
        </span>
      </div>
      <div className="flex justify-center items-center">
        {MySocialMedia.map(({ icon, href, label }) => {
          return (
            <ExternalLink
              href={href}
              key={href}
              label={label}
              className="mr-4 smMobile:mr-6 last:mr-0 border-none no-underline"
            >
              <FontAwesomeIcon icon={icon} className="w-5 smMobile:w-7" />
            </ExternalLink>
          );
        })}
      </div>
    </footer>
  );
};

export default SiteFooter;
