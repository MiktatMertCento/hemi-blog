import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Title from '../components/title'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HEMI Blog</title>
        <meta name="description" content="HEMI Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Title marginLeft="2">
          The Blog.
        </Title>


      </div>

    </div>
  )
}
