import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import PostComponent from '../../components/post'
import TitleComponent from '../../components/title'

export default function PostsPage({ articles }) {
  return (
    <>
      <Head>
        <title>Tüm Postlar</title>
        <meta name="description" content="HEMI Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <TitleComponent>
          Tüm Postlar
        </TitleComponent>

        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(12, 1fr)' gap={4} pb="10">
          {
            articles.map(article => (
              <GridItem key={article._id} h="250px" rowSpan={2} colSpan={{ base: 12, md: 4, '2xl': 3 }}>
                <PostComponent postInfo={article} />
              </GridItem>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3148/articles", {
    data: {  }
  })

  const articleList = res.data.articles

  return { props: { articles: articleList } }
}