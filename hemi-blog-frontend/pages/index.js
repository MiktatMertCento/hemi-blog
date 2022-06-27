import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HEMI Blog</title>
        <meta name="description" content="HEMI Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

    </div>
  )
}
