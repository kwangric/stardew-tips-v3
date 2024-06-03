/* eslint-disable react/no-unknown-property */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet" />
        </Head>
        <GoogleAnalytics gaId="G-X3292HYLJE" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument