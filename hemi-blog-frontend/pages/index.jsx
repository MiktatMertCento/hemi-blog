import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import Post from '../components/post'
import TitleComponent from '../components/title'

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>HEMI Blog</title>
        <meta name="description" content="HEMI Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <TitleComponent>
          Son Postlar
        </TitleComponent>

        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(12, 1fr)' gap={4} minH="400px" display={{ base: "none", md: "grid" }}>
          {
            props.articles.slice(0, 4).map((article, i) => {
              return <GridItem h={i === 0 ? "300px" : i === 1 ? "300px" : "143px"} key={`${article._id}${i}`} rowSpan={i === 0 ? 2 : i === 1 ? 2 : 1} colSpan={i === 0 ? 6 : i === 1 ? 4 : 2}>
                <Post postInfo={article} />
              </GridItem>
            })
          }
          {/*
            props.articles.slice(4, props.articles.length).map((article, i) => {
              return <>
                <GridItem placeSelf="center" h="300px" rowSpan={2} colSpan={{ base: 1 }}>
                  Test
                </GridItem>

                <GridItem h="300px" rowSpan={2} colSpan={{ base: 6 }}>
                  <Post postInfo={article} />
                </GridItem>

                <GridItem h="300px" rowSpan={2} colSpan={{ base: 5 }} />
              </>
            })
          */}
        </Grid>

        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(12, 1fr)' gap={4} mb={10} display={{ base: "grid", md: "none" }}>
          {
            props.articles.map((article, i) => {
              return <GridItem h='300px' key={`${article._id}${i}`} colSpan={12}>
                <Post postInfo={article} />
              </GridItem>
            })
          }
        </Grid>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get("https://BlogBackend.miktatcento.repl.co/articles", {
    data: { limit: 4 }
  })

  const articleList = res.data.articles

  return { props: { articles: articleList } }
}