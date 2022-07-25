import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import SiteHeader from '../components/header';
import SiteFooter from '../components/footer';
import { ThemeProvider } from '../hooks/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex justify-center">
      <Head>
        <title>Gaby Costales</title>
        <meta
          name="description"
          content="Software engineer born and raised in Miami, FL."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <div className="w-[92%] xsTablet:w-[95%] max-w-[1100px] flex flex-col">
          <SiteHeader />

          <SwitchTransition>
            <CSSTransition
              key={router.pathname}
              timeout={200}
              classNames="page"
            >
              <main className="w-full max-w-[90%] lgTablet:max-w-[736px] mx-auto mt-8 mdHeight:mt-10 lgHeight:mt-7 mb-10 flex-1 flex flex-col justify-center">
                <Component {...pageProps} />
              </main>
            </CSSTransition>
          </SwitchTransition>

          <SiteFooter />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
