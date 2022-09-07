
import Homepage from '../components/Homepage'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.stardew.tips" />
        <meta property="og:url" content="https://www.stardew.tips" />

        <title>Stardew Tips</title>
        <meta property="og:title" content="Stardew Tips" />
        <meta name="description" content="Quick Guide for Stardew Valley" />
        <meta property="og:description" content="Quick Guide for Stardew Valley" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="stardew valley"
        />
      </Head>
      <Homepage />
    </div>
  )
}
