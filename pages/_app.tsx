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
    <div className="site-container">
      <Head>
        <title>Gaby Costales</title>
        <meta
          name="description"
          content="Software engineer born and raised in Miami, FL."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <div className="site-content">
          <SiteHeader />

          <SwitchTransition>
            <CSSTransition
              key={router.pathname}
              timeout={200}
              classNames="page"
            >
              <Component {...pageProps} />
            </CSSTransition>
          </SwitchTransition>

          <SiteFooter />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
