import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../providers'
import { ReactElement, ReactNode } from 'react'
import Head from 'next/head';
import { NextPage } from 'next';

// type NextPageWithLayout = NextPage & {
//   getlayout? : (page : ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

export type NextPageWithLayout = NextPage & {
    getlayout? : (page : ReactElement) => ReactNode;
  };
  
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
  const getlayout = Component.getlayout ?? ((page) => page)

  
  return (
    <>
      <Head>
        <title>{'Judul Web'}</title>
      </Head>
      {getlayout(<Component {...pageProps} />)}
    </>
  )
}
