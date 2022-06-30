import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Title from '../../components/title'
import homeStyles from '../../styles/Home.module.css'

export default function Posts() {

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
        <title>Tüm Postlar</title>
        <meta name="description" content="HEMI Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Title>
          Tüm Postlar
        </Title>

        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(12, 1fr)' gap={4}>
          <GridItem h="15rem" rowSpan={{ base: 2, md: 2 }} colSpan={{ base: 12, md: 6 }} bg='tomato'>
            Post 1
          </GridItem>

          <GridItem h="15rem" rowSpan={{ base: 2, md: 2 }} colSpan={{ base: 6, md: 6 }} bg='tomato'>
            Post 2
          </GridItem>

          <GridItem h="15rem" rowSpan={{ base: 2, md: 2 }} colSpan={{ base: 6, md: 6 }} bg='tomato'>
            Post 3
          </GridItem>

          <GridItem h="15rem" rowSpan={{ base: 2, md: 2 }} colSpan={{ base: 6, md: 6 }} bg='tomato'>
            Post 4
          </GridItem>
          
          <GridItem h="15rem" rowSpan={{ base: 2, md: 2 }} colSpan={{ base: 6, md: 6 }} bg='tomato'>
            Post 5
          </GridItem>
        </Grid>
      </Box>


    </>
  )
}
