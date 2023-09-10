import Document, { Html, Head, Main, NextScript } from 'next/document';
import { IMAGES, ICONS } from '@constants/images';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href={ICONS.FAVICON} type="image/svg" />
          <meta property="og:title" content="Sora-note" />
          <meta property="og:image" content={IMAGES.META} />
          <meta property="og:description" content="Sora-note" />
          <meta property="og:url" content="https://soranote.vercel.app" />
          <meta name="description" content="Sora-note" />
          <meta name="keywords" content="Sora-note" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="preload"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="_modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
