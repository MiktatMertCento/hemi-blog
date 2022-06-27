import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Title from '../components/title'
import homeStyles from '../styles/Home.module.css'

export default function Home() {

  const postList = [
    {
      title: "Hasan'ın Nude Yayıldı Aq!",
      subtitle: "Görmek için hemen tıklayın!"
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
  ]

  return (
    <>
      <Head>
        <title>HEMI Blog</title>
        <meta name="description" content="HEMI Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title marginLeft="12rem">
        HEMİ Blog
      </Title>

      <Box margin="0px 12rem 0px 12rem">
        <Flex alignItems="start" justifyContent="start" gap="1rem" height="18rem">
          <Box w="50%" h="100%" bgGradient='linear(to-l, #7928CA, #FF0080)' flexShrink="0" />
          <Flex h="100%" flexDir="column" justify="space-between">
            <Text>
              20 Mart, 2022
            </Text>

            <Text className='threeLineClamp' fontWeight="bold" maxWidth="20rem" fontSize="2rem" overflow="hidden" lineHeight="10" textOverflow="ellipsis">
              {
                postList[0].title
              }
            </Text>

            <Text className='fourLineClamp' overflow="hidden" textOverflow="ellipsis">
              {
                postList[0].subtitle
              }
            </Text>
          </Flex>
        </Flex>

        <Grid templateColumns='repeat(4, 1fr)' gap={6} marginTop="2rem" marginBottom="4rem">
          {
            postList.slice(1).map((x, i) =>
              <GridItem key={i} w='100%' h='10rem'>
                <Box w="100%" h="80%" bgGradient='linear(to-l, #7928CA, #FF0080)' flexShrink="0" />
                <Text className='oneLineClamp' fontWeight="bold" textOverflow="ellipsis" overflow="hidden">
                  {x.title}
                </Text>
                <Text className='threeLineClamp' textOverflow="ellipsis" overflow="hidden">
                  {x.subtitle}
                </Text>
              </GridItem>
            )
          }
        </Grid>
      </Box>
    </>
  )
}
