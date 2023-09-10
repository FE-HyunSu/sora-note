import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { MEDIA } from '@styles/theme';
import Header from '@components/@common/Header';
import Footer from '@components/@common/Footer';
import GlobalStyle from '@styles/global-style';

const MyIndex = ({ Components }: any) => {
  return (
    <ThemeProvider theme={MEDIA}>
      <GlobalStyle />
      <Header />
      <main>{Components}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default MyIndex;
