import type { NextPage } from 'next';
import Link from 'next/link';

import ExternalLink from '../components/ExternalLink';
import PageTitle from '../components/page-title';
import { useColorScheme } from '../hooks/theme';

const Home: NextPage = () => {
  const { isLightMode } = useColorScheme();

  return (
    <>
      <section className="w-full flex flex-col mb-10 mobile:mb-11">
        <PageTitle title="gaby carmen costales" />
        <span className="font-semibold block theme-light-mode-bg theme-box-highlight mt-7 ml-auto pt-3 px-4 pb-4 italic text-xs leading-[1.1em]">
          yup, my initials are a compiler
        </span>
      </section>

      <section
        className={`m-[-5px] mobile:m-[-12px] lgMobile:m-[-20px] dark:m-[-20px] p-6 xsTablet:p-7 theme-light-mode-bg ${
          isLightMode && 'theme-box-highlight'
        }`}
      >
        <p className="mb-5 lgMobile:mb-7 text-5vw xsTablet:text-xl smTablet:text-2xl">
          <b>Hi!</b> Welcome to my website{' '}
          <span className="animate-wave inline-block">👋🏼</span>
        </p>

        <p className="mb-5 lgMobile:mb-7 text-5vw xsTablet:text-xl smTablet:text-2xl">
          I{"'"}m a software engineer born and raised in Miami, FL 🌴
        </p>

        <p className="mb-5 lgMobile:mb-7 text-5vw xsTablet:text-xl smTablet:text-2xl">
          Coding is my craft and I love building things that are useful to other
          people with emerging web technologies 👩‍💻
        </p>

        <p className="mb-5 lgMobile:mb-7 text-5vw xsTablet:text-xl smTablet:text-2xl">
          I currently work for{' '}
          <ExternalLink href="https://www.stripe.com/">Stripe</ExternalLink> 💜
        </p>
      </section>
    </>
  );
};

export default Home;
