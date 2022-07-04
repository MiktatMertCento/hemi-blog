import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Post from '../components/post'
import TitleComponent from '../components/title'

export default function HomePage() {

  const postList = [
    {
      title: "Windows 11 Yeni Güncellemesi İle Android Subsystem Desteğini Çok Yakında Alıyor!",
      subtitle: "Bildiğiniz üzere uzun zamandır üzerinde çalışılan ve testleri yapılan android subsystem desteği çok yakında Windows 11 xxx sürümünde sizlere ilk stable sürümü ile kavuşacak."
    },
    {
      title: "Post 1",
      subtitle: "Açıklama 1"
    },
    {
      title: "Post 2",
      subtitle: "Açıklama 2"
    },
    {
      title: "Post 3",
      subtitle: "Açıklama 3"
    },
    {
      title: "Post 4",
      subtitle: "Açıklama 4"
    },
    {
      title: "Post 1",
      subtitle: "Açıklama 1"
    },
    {
      title: "Post 2",
      subtitle: "Açıklama 2"
    },
    {
      title: "Post 3",
      subtitle: "Açıklama 3"
    },
    {
      title: "Post 4",
      subtitle: "Açıklama 4"
    },
    {
      title: "Post 6",
      subtitle: "Açıklama 4"
    },
  ]

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

        <Grid h='300px' templateRows='repeat(2, 1fr)' templateColumns='repeat(12, 1fr)' gap={4} mb={10}>
          <GridItem rowSpan={{ base: 2, md: 2 }} colSpan={{ base: 12, md: 5 }}>
            <Post postInfo={postList[0]} id={1} />
          </GridItem>

          <GridItem display={{ base: "none", md: "block" }} rowSpan={{ base: 0, md: 2 }} colSpan={{ base: 0, md: 4 }} >
            <Post postInfo={postList[1]} id={2} />
          </GridItem>

          <GridItem display={{ base: "none", md: "block" }} rowSpan={{ base: 0, md: 1 }} colSpan={{ base: 0, md: 3 }}>
            <Post postInfo={postList[2]} id={3} />
          </GridItem>

          <GridItem display={{ base: "none", md: "block" }} rowSpan={{ base: 0, md: 1 }} colSpan={{ base: 0, md: 3 }}>
            <Post postInfo={postList[3]} id={4} />
          </GridItem>
        </Grid>
      </Box>


    </>
  )
}
