import Link from 'next/link';

import { AccentColorToggle, ColorModeToggle } from './theme-color-managers';

const SiteHeader = () => {
  return (
    <header className="flex justify-between items-center py-7 px-2 xsTablet:px-7">
      <Link href="/">
        <a
          className="theme-light-mode-bg theme-box-highlight pt-1 px-4 pb-4"
          aria-label="Home Button"
        >
          <span className="font-mono font-semibold leading-[1em] text-xl mobile:text-3xl">
            gcc
          </span>
        </a>
      </Link>
      <div className="flex items-center">
        <Link href="/resume" passHref>
          <a className="font-mono tracking-wide text-base mobile:text-lg mr-3 mobile:mr-6 ">
            resume
          </a>
        </Link>
        <AccentColorToggle />
        <ColorModeToggle />
      </div>
    </header>
  );
};

export default SiteHeader;
