import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { IMAGES, ICONS } from '@constants/images';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ko';
import MyIndex from './_index';
dayjs.extend(isLeapYear);
dayjs.locale('ko');

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
        <meta property="og:title" content="SoraNote" />
        <meta property="og:description" content="소라 베이킹 노트" />
        <meta property="og:image" content={IMAGES.META} />
        <link rel="icon" href={ICONS.FAVICON} />
        <title>SoraNote</title>
      </Head>
      <MyIndex Components={<Component {...pageProps} />} />
    </RecoilRoot>
  );
};

export default MyApp;
